import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '@prismaService';
import { AppModel, Prisma } from '@prismaClient';
import { getPagination } from '@/common/utils/utils';
import { AppModelDto, AppModelListDto } from './dto/model.dto';
import { RedisService } from '@redisService';
import { RedisEnum } from '@/common/enum/index';
import { ChatZhipuAI } from '@langchain/community/chat_models/zhipuai';
import { ChatService } from '../chat/chat.service';
import { GennerateService } from '../gennerate/gennerate.service';
import {MinioEnum} from '@/common/enum/minio'
import axios from 'axios';
@Injectable()
export class ModelService {
  constructor(
    private readonly configService: ConfigService,
    private prisma: PrismaService,
    private redisService: RedisService,
    private gennerateService: GennerateService,
  ) {}
  async findAll(query, req) {
    const { pageSize, pageNum, ...rest } = query;
    const userId = req.user.userId as number;
    const pagination = getPagination(query);
    if (rest.modelId) {
      rest.modelId = Number(rest.modelId);
      if (isNaN(rest.modelId)) {
        throw new BadRequestException('modelId must be a number');
      }
    }
    const total = await this.prisma.appModel.count({
      where: {
        ...rest,
        delStatus: '1',
      },
    });
    const appModels = await this.prisma.appModel.findMany({
      ...pagination,
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        ...rest,
        delStatus: '1',
      },
    });
    const userModels = await this.prisma.appUserModel.findMany({
      where: { userId },
      select: { modelId: true },
    });
    const userModelIds = userModels.map((um) => um.modelId);
    // 获取模型的计数数据
    const modelIds = appModels.map((model) => model.modelId);
    const modelQaCounts = await this.getModelQaCounts(modelIds);
    // 为每个大模型添加一个标识字段，表示用户是否已经添加
    const appModelsWithUserStatus = appModels.map((model) => ({
      ...model,
      isAddedByUser: userModelIds.includes(model.modelId),
      modelQaCount: model.modelQaCount + (modelQaCounts[model.modelId] || 0),
    }));
    return { list: appModelsWithUserStatus, total };
  }
  async create(data: AppModelDto, req) {
    console.log('data', data);
    const { userId, nickName } = req.user;
    const fieldsToGenerate = ['modelDescription', 'introduce', 'prologue'];
    data.creatorId = userId;
    data.creatorName = nickName;
    data.modelImage = data.modelImage || `${MinioEnum}/ai.jpg`;
    await Promise.all(fieldsToGenerate.map(async field => {
      if (!data[field]) {
          data[field] = await this.gennerateService.generateModelContent(data, field);
      }
  }));
    // 创建 AppModel 并获取生成的 modelId
    const createdModel = await this.prisma.appModel.create({ data });
    // 绑定用户和模型的关系
    await this.addModel({
      userId: req.user.userId,
      modelId: createdModel.modelId,
    });
    return createdModel;
  }
  async getModelDetail(modelId) {
    return this.prisma.appModel.findUnique({
      where: {
        modelId: Number(modelId),
      },
    });
  }
  async addModel(data) {
    const { userId, modelId } = data;

    // 检查模型是否已经添加
    const existingEntry = await this.prisma.appUserModel.findUnique({
      where: {
        userId_modelId: {
          userId,
          modelId,
        },
      },
    });

    if (!existingEntry) {
      // 添加模型
      return await this.prisma.appUserModel.create({
        data: {
          userId,
          modelId,
        },
      });
    } else {
      return '模型已经添加';
    }
  }
  async getAddedModelsForUser(req) {
    const userId = req.user.userId as number;

    // 获取用户已经添加的大模型
    const userModels = await this.prisma.appUserModel.findMany({
      where: { userId },
      include: {
        model: true,
      },
      orderBy: [{ isPinned: 'desc' }, { updatedAt: 'desc' }],
    });

    return userModels.map((um) => {
      return {
        ...um.model,
        isPinned: um.isPinned,
      };
    });
  }
  // 更新用户的置顶状态
  async updatePinnedStatus(req, data) {
    let { modelId, isPinned } = data;
    const userId = req.user.userId as number;
    if (modelId) {
      modelId = Number(modelId);
    }
    return await this.prisma.appUserModel.update({
      where: {
        userId_modelId: {
          userId,
          modelId,
        },
      },
      data: {
        isPinned,
      },
    });
  }
  async removeModelForUser(req, modelId: number) {
    const userId = req.user.userId as number;
    await this.prisma.appUserModel.deleteMany({
      where: {
        userId,
        modelId,
      },
    });
    await this.prisma.chatRecord.updateMany({
      where: {
        userModelUserId: userId,
        userModelModelId: modelId,
      },
      data: {
        delStatus: '2',
      },
    });
    return { message: 'Model removed successfully' };
  }
  async deleteModel(req, modelId): Promise<AppModel> {
    await this.removeModelForUser(req, modelId);
    return this.prisma.appModel.update({
      where: { modelId: modelId },
      data: { delStatus: '2' },
    });
  }
  async getChatRecords(userId: number, modelId: number) {
    const result = await this.prisma.chatRecord.findMany({
      where: {
        userModel: {
          userId: +userId,
          modelId: +modelId,
        },
        delStatus: '1',
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return result;
  }
  async getChatHistory(req, modelId) {
    const userId = req.user.userId as number;
    if (modelId) {
      modelId = Number(modelId);
      if (isNaN(modelId)) {
        throw new BadRequestException('modelId must be a number');
      }
    }
    let result = await this.prisma.chatRecord.findMany({
      where: {
        userModelUserId: userId,
        userModelModelId: modelId,
        delStatus: '1',
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return result;
  }
  async createChatRecord(
    userId: number,
    modelId: number,
    message: string,
    role: string,
  ) {
    return this.prisma.chatRecord.create({
      data: {
        message,
        role,
        userModel: {
          connect: {
            userId_modelId: {
              userId,
              modelId,
            },
          },
        },
      },
    });
  }
  async delChatRecord(userId: number, modelId: number) {
    return this.prisma.chatRecord.updateMany({
      where: {
        userModelUserId: userId,
        userModelModelId: modelId,
      },
      data: {
        delStatus: '2',
      },
    });
  }
  async incrementModelQaCount(modelId: number): Promise<number> {
    const key = `${RedisEnum.MODEL_QA_COUNT}${modelId}`;
    return await this.redisService.increment(key);
  }

  async saveModelQaCountToDatabase(modelId: number): Promise<void> {
    const key = `${RedisEnum.MODEL_QA_COUNT}${modelId}`;
    const count = await this.redisService.get(key);
    if (count) {
      // 获取数据库中现有的 modelQaCount 值
      const model = await this.prisma.appModel.findUnique({
        where: { modelId },
        select: { modelQaCount: true },
      });

      if (model) {
        const newCount = model.modelQaCount + parseInt(count, 10);

        // 更新数据库中的 modelQaCount 值
        await this.prisma.appModel.update({
          where: { modelId },
          data: { modelQaCount: newCount },
        });

        // 清除 Redis 中的计数器
        await this.redisService.del(key);
      }
    }
  }
  async getModelQaCounts(modelIds: number[]): Promise<Record<number, number>> {
    const keys = modelIds.map((id) => `${RedisEnum.MODEL_QA_COUNT}${id}`);
    const counts = await this.redisService.getMultiple(keys);
    return modelIds.reduce(
      (acc, id) => {
        const key = `${RedisEnum.MODEL_QA_COUNT}${id}`;
        acc[id] = counts[key] ? parseInt(counts[key], 10) : 0;
        return acc;
      },
      {} as Record<number, number>,
    );
  }
  async getMineModel(req) {
    const userId = req.user.userId as number;
    return this.prisma.appModel.findMany({
      where: {
        creatorId: userId,
        delStatus: '1',
      },
    });
  }

  async improvement(data, req) {
    if (data.isAiImage) {
      const img =
        'http://' +
        this.configService.get<string>('minio.endPoint') +
        ':' +
        this.configService.get<string>('minio.port') +
        '/' +
        data.modelImage;
      const base64Image = await this.convertImageUrlToBase64(img);
      const analusisText = await this.gennerateService.analyzeImage(
        base64Image,
        '分析一下这个图片是干什么的，我需要根据这个图片生成大模型的头像和介绍',
        req,
      );
      const result = await this.gennerateService.generateModelContent(
        { analusisText },
        'improvement',
      );
      console.log('------->', JSON.parse(result));
      return JSON.parse(result);
    } else {
      if (data.modelDescription == '') {
        data.modelDescription =
          await this.gennerateService.generateModelContent(data, 'description');
      }
      if (data.introduce == '') {
        data.introduce = await this.gennerateService.generateModelContent(
          data,
          'introduce',
        );
      }
      if (data.prologue == '') {
        data.prologue = await this.gennerateService.generateModelContent(
          data,
          'prologue',
        );
      }
      if (data.modelImage) {
        const img =
          'http://' +
          this.configService.get<string>('minio.endPoint') +
          ':' +
          this.configService.get<string>('minio.port') +
          '/' +
          data.modelImage;
        const base64Image = await this.convertImageUrlToBase64(img);
        const analusisText = await this.gennerateService.analyzeImage(
          base64Image,
          '详细描述一下这张图片，我需要根据你的描述生成一张新的图片',
          req,
        );
        data.modelImage = await this.gennerateService.generateImage(
          { message: analusisText },
          'image',
        );
        data.isAiImage = true;
      } else {
        let message = `模型描述:${data.modelDescription},模型介绍:${data.introduce}`;
        data.modelImage = await this.gennerateService.generateImage(
          { message },
          'image',
        );
      }
      return data;
    }
  }
  async convertImageUrlToBase64(imageUrl: string): Promise<string> {
    try {
      const response = await axios.get(imageUrl, {
        responseType: 'arraybuffer',
      });
      const base64Image = Buffer.from(response.data, 'binary').toString(
        'base64',
      );
      return base64Image;
    } catch (error) {
      throw new Error(
        `Failed to convert image URL to Base64: ${error.message}`,
      );
    }
  }
}

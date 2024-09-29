import {
  Injectable,
  BadRequestException,
  NotFoundException,
  StreamableFile,
} from '@nestjs/common';
import { AppModel, Prisma } from '@prismaClient';
import { ChatZhipuAI } from '@langchain/community/chat_models/zhipuai';
import { HumanMessage } from '@langchain/core/messages';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '@prismaService';
import { Readable } from 'stream';
import { RedisService } from '@redisService';
import { ModelService } from '../model/model.service';
import { RedisEnum } from '@/common/enum/index';
import { HttpService } from '@nestjs/axios';
import { GennerateService } from '../gennerate/gennerate.service';
import { ZhipuAI } from 'zhipuai-sdk-nodejs-v4';
import { onDataReceived } from '@/common/utils/utils';
@Injectable()
export class ChatService {
  constructor(
    private prisma: PrismaService,
    private readonly configService: ConfigService,
    private redisService: RedisService,
    private modelService: ModelService,
    private readonly httpService: HttpService,
    private gennerateService: GennerateService,
  ) {}
  async chat(modelId, data, req, res) {
    const userId = req.user.userId as number;
    modelId = +modelId;
    if (isNaN(modelId)) {
      throw new Error('Invalid modelId');
    }
    const { message = '' } = data;
    const modelData = await this.prisma.appModel.findUnique({
      where: { modelId },
    });
    const language = modelData.language == 1 ? '中文' : '英文';
    //  let redisKey =`${RedisEnum.MODEL_HISTORY}userId_${userId}:modelId_${modelId}`;
    let redisKey =
      RedisEnum.MODEL_HISTORY + 'modelId_' + modelId + '.' + 'userId_' + userId;
    let chatHistory = await this.redisService.get(redisKey);

    if (!chatHistory) {
      const result = await this.modelService.getChatRecords(userId, modelId);
      console.log('result', result);

      chatHistory =
        result.map((item) => ({
          role: item.role,
          content: item.message,
        })) || []; // 确保 chatHistory 是一个数组

      try {
        await this.redisService.set(redisKey, chatHistory, 3600);
        console.log('chatHistory stored in Redis:', chatHistory);
      } catch (e) {
        console.error('Error storing chatHistory in Redis:', e);
      }

      if (!chatHistory) {
        chatHistory = [];
      }
    }

    // console.log('modelData',modelData);
    this.modelService.incrementModelQaCount(modelId); // 问答计数
    const messages = [
      {
        role: 'system',
        content: `你叫${modelData.modelName}，${modelData.modelDescription}，使用${language}交流`,
      },
      ...chatHistory,
      {
        role: 'user',
        content: message,
      },
    ];
    console.log('message', messages);

    const glm4 = new ChatZhipuAI({
      model: this.configService.get<string>('model.model'),
      temperature: 0.7,
      zhipuAIApiKey: this.configService.get<string>('model.apiKey'),
    });

    // 存储用户发的消息
    await this.modelService.createChatRecord(userId, modelId, message, 'user');
    chatHistory.push({
      role: 'user',
      content: message,
    });
    const stream = await glm4.stream(messages);
    let fullResponse = '';
    const readableStream = new Readable({
      read() {},
    });
    (async () => {
      for await (const chunk of stream) {
        const data = JSON.stringify({ content: chunk.content });
        const content = chunk.content;
        fullResponse += content;
        readableStream.push(data);
      }
      readableStream.push(null); // 结束流
      await this.modelService.createChatRecord(
        userId,
        modelId,
        fullResponse,
        'assistant',
      );
      chatHistory.push({ role: 'assistant', content: fullResponse });
      await this.redisService.set(redisKey, chatHistory, 3600);
    })();
    return new StreamableFile(readableStream);
  }

  async clearHistory(modelId, req) {
    const userId = req.user.userId as number;
    await this.modelService.delChatRecord(userId, +modelId);
    await this.redisService.del(
      RedisEnum.MODEL_HISTORY + 'modelId_' + modelId + '.' + 'userId_' + userId,
    );
    return 'ok';
  }
  async analyzeImage(data, req) {
    const { base64 } = data;
    return await this.gennerateService.analyzeImage(
      base64,
      '详细描述一下这张图片，我需要根据你的描述生成一张新的图片',
      req,
    );
  }
  async generateImage(data, req) {
    return await this.gennerateService.generateImage(data, 'image');
  }
  async generateText(data, req) {
    return await this.gennerateService.generateText(data, 'image');
  }
}

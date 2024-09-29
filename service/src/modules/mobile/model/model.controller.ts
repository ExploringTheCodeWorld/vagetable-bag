import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Query,
  Req,
  Put
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ModelService } from './model.service';
import { AppModel, Prisma } from '@prismaClient';
import { AppModelDto, AppModelListDto,ChatHistoryDto } from './dto/model.dto';
import { Request } from 'express';
@Controller('model')
export class ModelController {
  constructor(private modelService: ModelService) {}
  @ApiOperation({ summary: '模型列表' })
  @Get('/list')
  async findAll(@Query() query: AppModelListDto, @Req() req: Request) {
    return this.modelService.findAll(query, req);
  }
  @ApiOperation({ summary: '创建模型' })
  @Post()
  async create(@Body() postData: AppModelDto, @Req() req: Request) {
   return this.modelService.create(postData, req);
  }
  @ApiOperation({ summary: '模型详情' })
  @Get('/detail/:modelId')
  async getModelDetail(@Param('modelId') modelId: string) {
    return this.modelService.getModelDetail(modelId);
  }
  @ApiOperation({ summary: '添加模型' })
  @Post('/add')
  async addModel(@Body() data: Prisma.AppUserModelCreateInput) {
    return this.modelService.addModel(data);
  }
  @ApiOperation({ summary: '个人模型列表' })
  @Get('/addedList')
  async getAddedModels(@Req() req: Request) {
    return this.modelService.getAddedModelsForUser(req);
  }
  @ApiOperation({ summary: '更新置顶状态' })
  @Put('/pinned')
  async updatePinnedStatus(@Req() req: Request, @Body() data){
    return this.modelService.updatePinnedStatus(req,data);
  }
  @ApiOperation({ summary: '删除个人模型列表' })
  @Delete('/remove/:modelId')
  async removeAppModels(
    @Req() req: Request,
    @Param('modelId') modelId: string,
  ) {
    return this.modelService.removeModelForUser(req, +modelId);
  }
  @ApiOperation({ summary: '删除模型' })
  @Delete(':id')
  async delete( @Req() req: Request,@Param('id') id: string) {
    console.log('id', id);
    return this.modelService.deleteModel(req,Number(id));
  }
  @ApiOperation({ summary: '获取聊天记录' })
  @Get('/records')
  async getChatHistory(@Req() req: Request, @Query('modelId') modelId: string) {
    return this.modelService.getChatHistory(req, modelId);
  }
  @ApiOperation({ summary: '个人创建的模型' })
  @Get('/modelList')
  async getMineModel(@Req() req: Request) {
    return this.modelService.getMineModel(req);
  }
  @ApiOperation({ summary: '一键完善' })
  @Post('/improvement')
  async improvement(@Req() req: Request, @Body() data) {
    return this.modelService.improvement(data, req);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppModel, Prisma } from '@prismaClient';
import { ChatService } from './chat.service';
import { Response, Request } from 'express';
import { MessageDto ,GenerateImageDto,GennerateTextDto,AnalyzeImagesDto} from './dto/chat.dto';
@Controller('ai')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @ApiOperation({ summary: '模型对话' })
  @Post('chat/:modelId')
  async create(
    @Param('modelId') modelId: string,
    @Body() data: MessageDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const streamableFile = await this.chatService.chat(modelId, data, req,res);
    res.set({
      'Content-Type': 'application/json',
    });
    streamableFile.getStream().pipe(res);
  }
  @Delete('clear/:modelId')
  async clear(@Param('modelId') modelId: string, @Req() req: Request) {
    return await this.chatService.clearHistory(modelId, req);
  }
  @ApiOperation({ summary: '解析图片' })
  @Post('analyzeImage')
  async analyzeImage(@Body() data:AnalyzeImagesDto, @Req() req: Request, @Res() res: Response) {
    const stream = await this.chatService.analyzeImage(data, req);
     res.set({
      'Content-Type': 'application/octet-stream',
      'Transfer-Encoding': 'chunked',
    });

    // 将流数据写入响应
    stream.pipe(res);
  }
  @ApiOperation({ summary: '生成图片' })
  @Post('generateImage')
  async generateImage(@Body() data:GenerateImageDto, @Req() req: Request){
    return await this.chatService.generateImage(data, req);
  }
  @ApiOperation({ summary: '生成文字' })
  @Post('generateText')
  async generateText(@Body() data:GennerateTextDto, @Req() req: Request){
    return await this.chatService.generateText(data, req);
  }

}

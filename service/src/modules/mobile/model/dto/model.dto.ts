import { PaginationDto } from '@/common/dto/index.dto';
import {
  IsInt,
  IsOptional,
  IsString,
  IsBoolean
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AppModelDto {
  @ApiPropertyOptional({ description: '模型头像' })
  @IsOptional()
  @IsString()
  modelImage?: string;

  @ApiProperty({ description: '模型名称' })
  @IsString()
  modelName: string;

  @ApiProperty({ description: '模型描述' })
  @IsString()
  modelDescription?: string;

  @ApiPropertyOptional({ description: '模型问答数' })
  @IsOptional()
  @IsInt()
  modelQaCount?: number;

  @ApiProperty({ description: '模型声音' })
  @IsInt()
  sound?: number;

  @ApiProperty({ description: '模型语言' })
  @IsInt()
  language?: number;

  @ApiProperty({ description: '是否公开' })
  @IsInt()
  isPublic?: number;

  @ApiPropertyOptional({ description: '模型类型' })
  @IsOptional()
  @IsString()
  type?: string;

  @ApiPropertyOptional({ description: '是否置顶' })
  @IsOptional()
  @IsString()
  isPinned?: string;

  @ApiProperty({ description: '模型标签' })
  @IsOptional()
  @IsString()
  tags?: string;

  @ApiProperty({ description: '模型介绍' })
  @IsString()
  introduce?: string;

  @ApiProperty({ description: '模型开场白' })
  @IsString()
  prologue?: string;
  

  @ApiProperty({ description: '创建者ID' })
  @IsOptional()
  @IsInt()
  creatorId: number;

  @ApiProperty({ description: '创建者名字' })
  @IsOptional()
  @IsString()
  creatorName?: string;

  @ApiPropertyOptional({ description: '是否AI生成图片' })
  @IsOptional()
  @IsBoolean()
  isAiImage?: boolean;

  @ApiPropertyOptional({ description: '是否启用背景' })
  @IsOptional()
  @IsBoolean()
  enableBackground?: boolean;
  
  @ApiProperty({ description: '模型背景' })
  @IsOptional()
  @IsString()
  backgroundImage?: string;
}

export class AppModelListDto extends PaginationDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ description: '模型名称' })
  modelName?: string;

  @ApiProperty({ description: '模型ID' })
  @IsOptional()
  @IsInt()
  modelId?: number;
}

export class ChatHistoryDto extends PaginationDto {
  @ApiProperty({ description: '模型ID' })
  @IsInt()
  modelId: number;
}
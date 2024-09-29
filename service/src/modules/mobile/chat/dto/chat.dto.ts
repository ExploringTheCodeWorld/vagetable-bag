import { PaginationDto } from '@/common/dto/index.dto';
import {
  IsDateString,
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  IsInt,
  IsArray,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class MessageDto {
  @ApiProperty({ description: '用户对话' })
  @IsString()
  message: string;

}

export class GenerateImageDto  {
  @ApiProperty({ description: '消息内容', required: false })
  @IsOptional()
  @IsString()
  message?: string;

  @ApiProperty({ description: '输入内容', required: false })
  @IsOptional()
  @IsString()
  input?: string;

  @ApiProperty({ description: '列表数据', type: [String], required: false })
  @IsOptional()
  @IsArray()
  list?: string[];
}
export class GennerateTextDto{
  @ApiProperty({ description: '消息内容', required: false })
  @IsOptional()
  @IsString()
  message?: string;
}
export class AnalyzeImagesDto{
  @ApiProperty({ description: '图片base64', required: false })
  @IsOptional()
  @IsString()
  base64?: string;
}
// export class ChatDto {
//   @ApiProperty({
//     description: '消息数组',
//     type: [MessageDto],
//   })
//   @IsArray()
//   @ValidateNested({ each: true })
//   @Type(() => MessageDto)
//   readonly messages: MessageDto[];
// }

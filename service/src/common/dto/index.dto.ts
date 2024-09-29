import { IsDateString, IsNumberString, IsObject, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


/**
 * 
 * 分页
 */

export class PaginationDto {
    @ApiProperty({ description: '页码', default: 1,required: false })
    @IsNumberString()
    @IsOptional()
    pageNum: number;

    @ApiProperty({ description: '每页条数', default: 10,required: false  })
    @IsNumberString()
    @IsOptional()
    pageSize: number;
}
import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@/common/constants/httpStatus'
import { nowDateTime } from './utils/date';

export default class Result<T> {
  @ApiProperty({ description: '状态码', example: HttpStatus.OK })
  code: number;

  @ApiProperty({ description: '消息', example: '成功' })
  message: string;

  @ApiProperty({ description: '数据', example: {} })
  data: T;

  @ApiProperty({ description: '时间', example: nowDateTime() })
  time: string;

  constructor(code: number, message: string, data: T) {
    this.code = code;
    this.message = message;
    this.data = data;
    this.time = nowDateTime();
  }
  static ok<T>(data: T,msg: string = 'success') {
    return new Result<T>(HttpStatus.OK, msg, data);
  }
  static fail<T>(msg: string = 'error',code: number = HttpStatus.INTERNAL_SERVER_ERROR, data:T = null) {
    return new Result<T>(code, msg, data);
  }
}
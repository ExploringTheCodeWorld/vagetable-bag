import { Module } from '@nestjs/common';
// import { GennerateController } from './gennerate.controller';
import { GennerateService } from './gennerate.service';
@Module({
//   controllers: [GennerateController],
  providers: [GennerateService],
  exports: [GennerateService]
})
export class GennerateModule {}
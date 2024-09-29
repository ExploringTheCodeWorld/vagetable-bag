import { Module } from '@nestjs/common';
import { PrismaService } from '@prismaService';
import { TasksService } from './tasks.service';
import { ModelService } from '@/modules/mobile/model/model.service';

@Module({
  imports: [ ],
  controllers: [],
  providers: [ PrismaService, TasksService,ModelService],
})
export class AppModule {}
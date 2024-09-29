import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ModelService } from '@/modules/mobile/model/model.service';
import { RedisService } from '@redisService';
import { RedisEnum } from '@/common/enum/index';

@Injectable()
export class TasksService {
  constructor(
    private readonly modelService: ModelService,
    private readonly redisService: RedisService,
  ) {}
  private readonly logger = new Logger(TasksService.name);
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleCron() {
    this.logger.debug('更新模型QA数量到数据库-定时任务开始执行');
    const keys = await this.redisService.getKeys(
      `${RedisEnum.MODEL_QA_COUNT}*`,
    );
    // console.log('keys', keys);
    for (const key of keys) {
      const modelId = this.extractModelIdFromKey(key);
      if (modelId) {
        await this.modelService.saveModelQaCountToDatabase(modelId);
      }
    }
    this.logger.debug('更新模型QA数量到数据库-定时任务执行完毕');
  }
  private extractModelIdFromKey(key: string): number | null {
    const match = key.match(`${RedisEnum.MODEL_QA_COUNT}(\\d+)`);
    return match ? parseInt(match[1], 10) : null;
  }
}

import { Module,Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {PrismaService} from './prisma/prisma.service'
import { RedisService } from './redis/redis.service';
import { MinioService } from './minio/minio.service';
@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService,RedisService,MinioService],
  exports:[PrismaService,RedisService,MinioService]
})
export class SystemModule {}

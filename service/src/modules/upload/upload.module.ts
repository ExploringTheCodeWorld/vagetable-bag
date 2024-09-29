import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { MinioService } from '../system/minio/minio.service';
@Module({
  controllers: [UploadController],
  providers: [UploadService,MinioService],
  exports: [UploadService]
})
export class UploadModule {}
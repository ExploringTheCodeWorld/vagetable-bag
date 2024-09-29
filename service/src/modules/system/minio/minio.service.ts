import { Injectable } from '@nestjs/common';
import * as Minio from 'minio';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class MinioService {
  private readonly minioClient: Minio.Client;

  constructor(private readonly config: ConfigService) {
    const minioConfig = this.config.get('minio');
    this.minioClient = new Minio.Client({
      endPoint: minioConfig.endPoint,
      port: minioConfig.port,
      useSSL: minioConfig.useSSL,
      accessKey: minioConfig.accessKey,
      secretKey: minioConfig.secretKey,
    });
  }

  async uploadFile(
    bucketName: string,
    fileName: string,
    fileBuffer: Buffer,
    fileSize:number,
    contentType: string,
  ): Promise<string> {
    // 检查bucket是否存在，如果不存在则创建
    const bucketExists = await this.minioClient.bucketExists(bucketName);
    if (!bucketExists) {
      await this.minioClient.makeBucket(bucketName);
    }

    // 设置桶策略为公开访问
    await this.minioClient.setBucketPolicy(bucketName, JSON.stringify({
      Version: "2012-10-17",
      Statement: [{
        Effect: "Allow",
        Principal: "*",
        Action: ["s3:GetObject"],
        Resource: [`arn:aws:s3:::${bucketName}/*`]
      }]
    }));
    // const fileSize = fileBuffer.length;
    // 上传文件
    await this.minioClient.putObject(
      bucketName,
      fileName,
      fileBuffer,
      fileSize,
      { 'Content-Type': contentType },
    );
    const url = `http://${this.config.get('minio.endPoint')}:${this.config.get('minio.port')}/${bucketName}/${fileName}`;
    // const preSignature = this.minioClient.presignedUrl('GET', bucketName, fileName,60 * 60);
    // 返回文件的URL
    return url
  }
}

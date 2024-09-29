import { Injectable, Logger } from '@nestjs/common';
import {getUUID} from '@/common/utils/utils'
import { MinioService } from '@/modules/system/minio/minio.service';
import {MinioEnum} from '@/common/enum/minio'
import * as path from 'path';
@Injectable()
export class UploadService {
  constructor(private readonly minioService: MinioService) {}

  async uploadImageFile(file:Express.Multer.File){
    // const fileName = file.originalname; // 或者使用 file.savedFilename
    const fileName = this.confoundFile(file) 
    console.log('fileName',fileName);
    
    const fileBuffer = file.buffer;
    const contentType = file.mimetype;
    const fileSize = file.size
    const result =  await this.minioService.uploadFile(MinioEnum.BucketName, fileName, fileBuffer, fileSize,contentType);
    console.log('result',result);
    
    return {
      fileName:MinioEnum.BucketName+'/'+fileName,
      url:result,
    }
  }


   confoundFile(file:Express.Multer.File){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 月份从 0 开始计数
    const day = String(currentDate.getDate()).padStart(2, '0');
    const datePath = `${year}/${month}/${day}`;

    const fileExtension = path.extname(file.originalname);
    const uniqueFileName = `${getUUID()}${fileExtension}`;
    const filePath = `${datePath}/${uniqueFileName}`;
    return filePath
  }
}

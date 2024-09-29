import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage,memoryStorage } from 'multer';
import { extname } from 'path';
import {CustomFile} from './upload.interface'
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('/image')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      fileFilter: (req, file, callback) => {
        if (!file) {
          return callback(new Error('No file provided'), false);
        }
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif|pdf)$/)) {
          console.error('Only image files and PDF are allowed!');
          return callback(
            new Error('Only image files and PDF are allowed!'),
            false,
          );
        }
        callback(null, true);
      },
    }),
  )
  uploadImageFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    return this.uploadService.uploadImageFile(file);
  }
}

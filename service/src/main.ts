import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {getIp} from './common/utils/utils'
import {join} from 'path'
import { ValidationPipe } from '@nestjs/common';
import { BadRequestExceptionFilter } from '@/common/filters/bad-request-exception.filter';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{
    cors: true,
  });
  const config = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      // enableDebugMessages: true,
    }),
  );
  app.useGlobalFilters(new BadRequestExceptionFilter());
  app.useStaticAssets(join(__dirname, '..', 'public'));
  const prefix = config.get<string>('app.prefix');
  const port = config.get<number>('app.port') || 8080;
  const options = new DocumentBuilder()
    .setTitle('菜包app 接口文档')
    .setDescription('菜包app 接口文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${prefix}/swagger-ui`, app, document);
  const ipAddress = getIp()
  await app.listen(+port);
  console.log(
    `菜包 app 服务启动成功 `,
    '\n',
    '\n',
    join(__dirname, '..', '../upload'),
    '服务地址',
    `http://${ipAddress}:${port}${prefix}/`,
    '\n',
    'swagger 文档地址        ',
    `http://${ipAddress}:${port}${prefix}/swagger-ui/`,
  )
}
bootstrap();

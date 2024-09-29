import { Module,Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/index';
import { SystemModule } from './modules/system/system.module';
import {MobileModule} from './modules/mobile/mobile.module';
import { APP_FILTER ,APP_INTERCEPTOR,APP_GUARD } from '@nestjs/core';
import { HttpExceptionFilter } from '@/common/filters/http-exceptions-filter';
import { TransformInterceptor } from '@/common/interceptor/transform.interceptor';
import {JwtAuthGuard} from '@/common/guards/auth.guard'
import { ConfigService } from '@nestjs/config';
import {  JwtService } from '@nestjs/jwt';
import { RedisModule,RedisModuleOptions,RedisClientOptions  } from '@mvmdev/nestjs-redis';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './modules/tasks/tasks.service';
import { UploadModule } from './modules/upload/upload.module';
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [configuration],
    }),
    RedisModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<RedisModuleOptions> => {
        return {
          closeClient: true,
          readyLog:true,
          errorLog:true,
          config: configService.get<RedisClientOptions>('redis')
        };
      }
    }),
    ScheduleModule.forRoot(),
    SystemModule,
    MobileModule,
    UploadModule
  ],
  controllers: [],
  providers: [
    TasksService,
    JwtService, // Ensure JwtService is provided in the current module
    ConfigService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }
  ],
})
export class AppModule {}

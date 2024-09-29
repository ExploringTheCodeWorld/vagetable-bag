import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { SystemModule } from '../system/system.module';
import { PrismaService } from '@prismaService';
import { ModelService } from './model/model.service';
import { ModelController } from './model/model.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { RedisService } from '@redisService';
import { AuthStrategy } from './auth/auth.strategy';
import {ChatController} from './chat/chat.controller';
import {ChatService} from './chat/chat.service';
import { HttpModule } from '@nestjs/axios';
// import { GennerateModule } from './gennerate/gennerate.module';
import { GennerateService } from './gennerate/gennerate.service';
@Module({
  imports: [
    SystemModule,
    PassportModule,
    HttpModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.secretKey'),
        // signOptions: { expiresIn: configService.get<string>('jwt.expiresIn') },
        signOptions: {},
      }),
    }),
  ],
  controllers: [UserController, ModelController,ChatController],
  providers: [UserService, ModelService, RedisService,AuthStrategy,ChatService,GennerateService],
  exports:[PassportModule,UserService,ModelService,ChatService,GennerateService]
})
export class MobileModule {}

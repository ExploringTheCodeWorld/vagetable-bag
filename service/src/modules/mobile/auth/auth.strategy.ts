import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { RedisService } from '@redisService';
import {RedisEnum} from '@/common/enum/index'
@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly config: ConfigService,
    private readonly redisService: RedisService,
  ) {
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        // ignoreExpiration: false,
        secretOrKey: config.get('jwt.secretKey'),
    });
  }

  async validate(payload: { uuid: string; userId: string; iat: Date }): Promise<any> {
    
    const user = await this.redisService.get(`${RedisEnum.USER_TOKEN}${payload.uuid}`);
    if (!user) throw new UnauthorizedException('登录已过期，请重新登录');
    return {
      ...user,
      uuid:payload.uuid,
    };
  }
}
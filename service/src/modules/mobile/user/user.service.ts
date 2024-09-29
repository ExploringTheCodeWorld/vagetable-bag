import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '@prismaService';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/user.dto';
import { RedisService } from '@redisService';
import { RedisEnum } from '@/common/enum/index';
import { getUUID } from '@/common/utils/utils';
import { REDIS_TOKEN_EXPIRESIN } from '@/common/constants/index';
@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private redisService: RedisService,
  ) {}

  async login(loginDto: LoginDto) {
    const { phone, password } = loginDto;
    let user = await this.findUserByPhoneNumber(phone);

    if (!user) {
      user = await this.createUser(phone, password);
    } else {
      const isPasswordValid = await this.validatePassword(
        password,
        user.password,
      );
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid password');
      }
    }
    const uuid = getUUID();
    const token = this.createToken({ uuid, userId: user.userId });
    await this.redisService.set(
      `${RedisEnum.USER_TOKEN}${uuid}`,
      user,
      REDIS_TOKEN_EXPIRESIN,
    );

    return token;
  }
  async logout(req) {
    const user = req.user;
    await this.redisService.del(`${RedisEnum.USER_TOKEN}${user.uuid}`);

    return 'ok';
  }
  userInfo(req) {
    const user = req.user;
    const result = this.prisma.appUser.findUnique({
      where: { userId: user.userId },
    });
    return result;
  }
  async updateUserInfo(req,body){
    const user = req.user;
    const result = await this.prisma.appUser.update({
      where: { userId: user.userId },
      data: body,
    });
    return result;
  }
  createToken(payload: { uuid: string; userId: number }): string {
    const accessToken = this.jwtService.sign(payload);
    return accessToken;
  }
  parseToken(token: string) {
    try {
      if (!token) return null;
      const payload = this.jwtService.verify(token.replace('Bearer ', ''));
      return payload;
    } catch (error) {
      return null;
    }
  }
  async findUserByPhoneNumber(phone: string) {
    return this.prisma.appUser.findUnique({
      where: { phone },
    });
  }

  async createUser(phone: string, password: string) {

    const hashedPassword = await bcrypt.hash(password, 10);
    const defaultNickName = this.generateDefaultNickName(phone);
    return this.prisma.appUser.create({
      data: {
        phone,
        password: hashedPassword,
        nickName:defaultNickName,
      },
    });
  }

  async validatePassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
  generateDefaultNickName(phone: string): string {
    const randomValue = Math.random().toString(36).substring(2, 8); // 生成一个随机字符串
    const phoneLastFour = phone.slice(-4); // 获取手机号的后四位
    return `user_${phoneLastFour}_${randomValue}`;
  }
}

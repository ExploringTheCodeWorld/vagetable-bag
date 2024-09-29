import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Inject,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { pathToRegexp } from 'path-to-regexp';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '@/modules/mobile/user/user.service';
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
  private whitelList = [];
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    @Inject(UserService) private readonly userService: UserService,
  ) {
    super();
    this.whitelList = [].concat(
      this.configService.get<string[]>('perm.whitelist') || [],
    );
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    const isWhite = this.verifyWhitelist(request);
    const whitelistEnable = this.configService.get<boolean>(
      'perm.whitelistEnable',
    );
    if (isWhite && whitelistEnable) {
      return true;
    }
    if (!token) {
      throw new UnauthorizedException('No token provided');
    }
    if (!token) throw new ForbiddenException('请重新登录');
    const atUserId = await this.userService.parseToken(token);
    if (!atUserId)
      throw new UnauthorizedException('当前登录已过期，请重新登录');
    return super.canActivate(context) as boolean;
  }
  private verifyWhitelist(req: Request): boolean {
    const i = this.whitelList.findIndex((route) => {
      // Request method type is the same
      if (req.method.toUpperCase() === route.method.toUpperCase()) {
        // contrast url
        return !!pathToRegexp(route.path).exec(req.url);
      }
      return false;
    });
    return i > -1;
  }
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}

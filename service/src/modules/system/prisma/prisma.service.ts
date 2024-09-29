import { Injectable, OnModuleInit,OnModuleDestroy } from '@nestjs/common';
import { PrismaClient,Prisma  } from '@prismaClient'
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit,OnModuleDestroy {
    constructor(
        private readonly configService:ConfigService
    ){
        const databaseUrl = configService.get<string>('prisma.DATABASE_URL');
        const logEnable = configService.get<boolean>('prisma.logEnable');
        const logList = configService.get<string[]>('prisma.log');
        const logLevels: (Prisma.LogLevel | Prisma.LogDefinition)[] = logList.map(level => level as Prisma.LogLevel);
        super({
            datasourceUrl:databaseUrl,
            log: logEnable ? logLevels : [],
        })
    }
  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
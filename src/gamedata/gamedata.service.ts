import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable, ForbiddenException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class gamedataService {
  constructor(private prisma: PrismaService) {}

  async createdata(title: string, data: unknown) {
    try {
      const Data = await this.prisma.gameData.create({
        data: {
          title: title,
          gameData: data as Prisma.JsonObject,
        },
      });
      return Data;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException('Invalid data');
      }
    }
  }

  async getdata(title: string) {
    return this.prisma.gameData.findMany({
      where: {
        title,
      },
    });
  }
}

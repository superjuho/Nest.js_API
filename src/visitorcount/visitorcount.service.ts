import { PrismaService } from './../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class visitorCountService {
  constructor(private prisma: PrismaService) {}

  async createcount(
    token: string,
    title: string,
    endpoint: string,
    endcondition: string,
  ) {
    try {
      const visitcount = await this.prisma.visitorCount.create({
        data: {
          token: token,
          title: title,
          count: 1,
          endpoint: endpoint,
          endcondition: endcondition,
        },
      });
      return visitcount;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new ForbiddenException('Token already exists');
        }
      }
      throw e;
    }
  }

  async getCount(token: string) {
    try {
      const visitor = await this.prisma.visitorCount.findUnique({
        where: {
          token: token,
        },
      });
      return visitor;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new ForbiddenException('Token not in the database');
        }
      }
      throw e;
    }
  }

  async addtoCount(token: string) {
    const visitor = await this.getCount(token);
    if (visitor) {
      const count = await this.prisma.visitorCount.update({
        where: {
          token: token,
        },
        data: {
          count: visitor.count + 1,
        },
      });
      return count;
    } else {
      throw 'no!';
    }
  }

  async getVisitors(title: string) {
    return this.prisma.visitorCount.findMany({
      where: {
        title,
      },
    });
  }

  async addEndPoint(data: string, token: string) {
    try {
      const endPoint = await this.prisma.visitorCount.update({
        where: {
          token: token,
        },
        data: {
          endpoint: data,
        },
      });
      return endPoint;
    } catch (e) {
      throw e;
    }
  }

  async addEndCond(data: string, token: string) {
    try {
      const endCond = await this.prisma.visitorCount.update({
        where: {
          token: token,
        },
        data: {
          endcondition: data,
        },
      });
      return endCond;
    } catch (e) {
      throw e;
    }
  }
}

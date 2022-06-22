import { User } from '@prisma/client';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class reviewsService {
  constructor(private prisma: PrismaService) {}

  async createreview(title: string, pointReview: number, textReview?: string) {
    const review = await this.prisma.reviews.create({
      data: {
        title: title,
        pointReview: pointReview,
        textReview: textReview,
      },
    });
    return review;
  }

  async getReviews(title: string) {
    return this.prisma.reviews.findMany({
      where: {
        title,
      },
    });
  }

  async deleteReview(user: User, id: number) {
    if (user) {
      return this.prisma.reviews.delete({
        where: {
          id,
        },
      });
    } else {
      throw 'no authority';
    }
  }

  async deleteAll(user: User, title: string) {
    if (user) {
      return this.prisma.reviews.deleteMany({
        where: {
          title,
        },
      });
    } else {
      throw 'no authority';
    }
  }
}

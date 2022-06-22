import { User } from '@prisma/client';
import { EditUserDto } from './dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async editUser(userId: number, dto: EditUserDto) {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...dto,
      },
    });
    return user;
  }

  async deleteUser(user: User, email: string) {
    if (user) {
      return this.prisma.user.delete({
        where: {
          email,
        },
      });
    } else {
      throw 'no authority';
    }
  }
}

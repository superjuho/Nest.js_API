import { SignUpDto } from './dto/singup.dto';
import { ConfigService } from '@nestjs/config';
import { AuthDto } from './dto';
import { PrismaService } from './../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signup(dto: SignUpDto) {
    if (dto.access_token === '*****SECRET*****') {
      //generate the password hash
      const hash = dto.password;
      //save the new user in the db
      try {
        const user = await this.prisma.user.create({
          data: {
            email: dto.email,
            hash,
          },
        });
        //return the saved user
        return this.signToken(user.id, user.email);
      } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
          if (e.code === 'P2002') {
            throw new ForbiddenException('Credentials taken');
          }
        }
        throw e;
      }
    } else {
      throw 'no authority!';
    }
  }

  async signin(dto: AuthDto) {
    // find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // if no user exists throw e
    if (!user) throw new ForbiddenException('Credentials incorrect');
    // compare pass
    const pwMatches = await user.hash;
    // if pass incorrect throw e
    if (pwMatches !== dto.password) {
      throw new ForbiddenException('Credentials incorrect');
    }
    // send back user
    if (pwMatches === dto.password) {
      return this.signToken(user.id, user.email);
    }
  }
  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      secret: secret,
    });
    return {
      access_token: token,
    };
  }
}

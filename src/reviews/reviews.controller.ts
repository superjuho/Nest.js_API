import { JwtGuard } from './../auth/guard/jwt.guard';
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { AuthDto } from './dto';
import { User } from '@prisma/client';
import { reviewsService } from './reviews.service';

@Controller('review')
export class ReviewsController {
  constructor(private ReviewService: reviewsService) {}

  @Post('post-review')
  createreview(@Body() data: AuthDto) {
    return this.ReviewService.createreview(
      data.title,
      data.pointReview,
      data.textReview,
    );
  }

  @Get('get-reviews/:title')
  getReviews(@Param('title') title: string) {
    return this.ReviewService.getReviews(title);
  }

  @UseGuards(JwtGuard)
  @Delete('delete-review/:id')
  deleteReview(@GetUser() user: User, @Param('id') id: string) {
    const bitch = parseInt(id);
    const data: number = bitch;
    return this.ReviewService.deleteReview(user, data);
  }

  @UseGuards(JwtGuard)
  @Delete('delete-all-reviews/:title')
  deleteAll(@GetUser() user: User, @Param('title') title: string) {
    return this.ReviewService.deleteAll(user, title);
  }
}

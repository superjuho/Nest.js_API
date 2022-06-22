import { reviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ReviewsController],
  providers: [reviewsService],
})
export class ReviewsModule {}

import { visitorCountService } from './visitorcount.service';
import { VisitorController } from './visitorcount.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [VisitorController],
  providers: [visitorCountService],
})
export class VisitorcountModule {}

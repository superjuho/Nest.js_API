import { EndCDto } from './dto/endcond.dto';
import { EndPDto } from './dto/endpoint.dto';
import { visitorCountService } from './visitorcount.service';
import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { AuthData, VisitorData } from './dto';

@Controller('visitorcount')
export class VisitorController {
  constructor(private VisitorCountService: visitorCountService) {}
  @Get('visitor')
  getCount(@Body() data: VisitorData) {
    return this.VisitorCountService.getCount(data.token);
  }

  @Post('createcount')
  createcount(@Body() data: AuthData) {
    return this.VisitorCountService.createcount(
      data.token,
      data.title,
      data.endpoint,
      data.endcondition,
    );
  }

  @Patch('add')
  addtocount(@Body() data: VisitorData) {
    return this.VisitorCountService.addtoCount(data.token);
  }

  @Get('getvisitors/:title')
  getVisitors(@Param('title') title: string) {
    return this.VisitorCountService.getVisitors(title);
  }

  @Patch('endpoint')
  addendpoint(@Body() data: EndPDto) {
    return this.VisitorCountService.addEndPoint(data.endpoint, data.token);
  }

  @Patch('endcond')
  addendcond(@Body() data: EndCDto) {
    return this.VisitorCountService.addEndCond(data.endcondition, data.token);
  }
}

import { GameDataDto } from './dto/gamedata.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { gamedataService } from './gamedata.service';

@Controller('gamedata')
export class GameDataController {
  constructor(private GameDataService: gamedataService) {}

  @Post('createdata')
  createdata(@Body() data: GameDataDto) {
    return this.GameDataService.createdata(data.title, data.data);
  }

  @Get('getdata/:title')
  getdata(@Param('title') title: string) {
    return this.GameDataService.getdata(title);
  }
}

import { Module } from '@nestjs/common';
import { gamedataService } from './gamedata.service';
import { GameDataController } from './gamedata.controller';

@Module({
  controllers: [GameDataController],
  providers: [gamedataService],
})
export class GamedataModule {}

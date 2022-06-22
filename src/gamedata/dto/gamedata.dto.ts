import { IsNotEmpty, IsString } from 'class-validator';

export class GameDataDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  data: JSON;
}

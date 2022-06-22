import { IsNotEmpty, IsString } from 'class-validator';

export class GetVisitors {
  @IsString()
  @IsNotEmpty()
  title: string;
}

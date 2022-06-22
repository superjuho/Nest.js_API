import { IsNotEmpty, IsString } from 'class-validator';

export class VisitorData {
  @IsString()
  @IsNotEmpty()
  token: string;
}

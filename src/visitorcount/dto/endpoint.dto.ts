import { IsString, IsNotEmpty } from 'class-validator';

export class EndPDto {
  @IsString()
  @IsNotEmpty()
  endpoint: string;

  @IsString()
  @IsNotEmpty()
  token: string;
}

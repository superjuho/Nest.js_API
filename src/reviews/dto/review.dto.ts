import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  textReview: string;

  @IsNumber()
  @IsNotEmpty()
  pointReview: number;
}

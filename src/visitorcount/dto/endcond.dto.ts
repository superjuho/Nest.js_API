import { IsString, IsNotEmpty } from 'class-validator';

export class EndCDto {
  @IsString()
  @IsNotEmpty()
  endcondition: string;

  @IsString()
  @IsNotEmpty()
  token: string;
}

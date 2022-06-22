import { IsNotEmpty, IsString } from 'class-validator';
export class GetReviews {
  @IsNotEmpty()
  @IsString()
  title: string;
}

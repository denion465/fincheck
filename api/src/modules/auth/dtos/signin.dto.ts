import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SigninDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @MinLength(8)
  @IsNotEmpty()
  @IsString()
  password: string;
}

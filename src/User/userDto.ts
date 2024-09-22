import {
  IsIdentityCard,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  age: number;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  id: number;
}

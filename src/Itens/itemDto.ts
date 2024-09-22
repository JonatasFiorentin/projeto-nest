import { ParseFloatPipe } from '@nestjs/common';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ItemDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  name: string;

  @IsNumber()
  preco: number;

  @IsNumber()
  quantidade: number;

  @IsString()
  categoria: string;

  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}

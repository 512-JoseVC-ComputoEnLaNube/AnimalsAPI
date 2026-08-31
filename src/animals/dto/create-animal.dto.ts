import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  especie: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  raza?: string;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  edad: number;

  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  peso: number;
}

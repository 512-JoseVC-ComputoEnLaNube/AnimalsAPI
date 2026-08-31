import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class UpdateAnimalDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nombre?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  especie?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  raza?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  edad?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  peso?: number;
}

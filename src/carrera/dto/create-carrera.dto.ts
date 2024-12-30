import { carreraTypes } from '@/common/interfaces/carrera-type.interface';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateCarreraDto {
  @IsString()
  titulo: string;

  @IsString()
  type: typeof carreraTypes;

  @IsString()
  @IsOptional()
  area?: string;

  @IsArray()
  @IsOptional()
  competencias?: string[];

  @IsString()
  @IsOptional()
  pdf?: string;

  @IsString()
  banner?: string;
}

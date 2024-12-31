import { carreraTypes } from '@/common/interfaces/carrera-type.interface';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCarreraDto {
  @IsString()
  titulo: string;

  @IsString()
  slug: string;

  @IsString()
  type: (typeof carreraTypes)[keyof typeof carreraTypes];

  @IsString()
  @IsOptional()
  area?: string;

  @IsString()
  @IsOptional()
  pdf: string;

  @IsString()
  @IsOptional()
  banner?: string;

  @IsString()
  @IsOptional()
  img_competencias?: string;

  @IsNumber()
  programa_id: number;
}

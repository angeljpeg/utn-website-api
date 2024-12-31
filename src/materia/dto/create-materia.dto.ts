import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CrearMateriaDto {
  @IsString()
  materia: string;

  @IsNumber()
  @IsOptional()
  cuatrimestre_id?: number;
}

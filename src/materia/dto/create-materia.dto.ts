import { IsNumber, IsString } from 'class-validator';

export class CrearMateriaDto {
  @IsString()
  materia: string;

  @IsNumber()
  cuatrimestre_id?: number;
}

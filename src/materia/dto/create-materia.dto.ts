import { IsString } from 'class-validator';

export class CrearMateriaDto {
  @IsString()
  materia: string;
}

import { IsString } from 'class-validator';

export class CrearCompetenciaDto {
  @IsString()
  competencia: string;
}

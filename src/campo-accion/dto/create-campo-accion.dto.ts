import { IsNumber, IsString } from 'class-validator';

export class CrearCampoDeAccionDto {
  @IsString()
  descripcion: string;

  @IsNumber()
  carrera_id: number;
}

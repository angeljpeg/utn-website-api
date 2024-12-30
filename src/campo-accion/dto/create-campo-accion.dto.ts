import { IsString } from 'class-validator';

export class CrearCampoDeAccionDto {
  @IsString()
  descripcion: string;
}

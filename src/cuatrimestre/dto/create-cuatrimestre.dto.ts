import { IsNumber } from 'class-validator';

export class CrearCuatrimestreDto {
  @IsNumber()
  numero: number;
  @IsNumber()
  carrera_id: number;
}

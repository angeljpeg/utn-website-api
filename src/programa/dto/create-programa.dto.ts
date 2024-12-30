import { IsString } from 'class-validator';

export class CrearProgramaDto {
  @IsString()
  titulo: string;
  @IsString()
  icon: string;
}

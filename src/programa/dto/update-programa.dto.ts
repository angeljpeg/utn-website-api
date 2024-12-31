import { PartialType } from '@nestjs/mapped-types';
import { CrearProgramaDto } from './create-programa.dto';

export class ActualizarProgramaDto extends PartialType(CrearProgramaDto) {
  carrera_id?: number;
}

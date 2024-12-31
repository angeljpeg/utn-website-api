import { OmitType } from '@nestjs/mapped-types';
import { CreateCarreraDto } from './create-carrera.dto';

export class CrearIngieneriaDto extends OmitType(CreateCarreraDto, [
  'slug',
  'banner',
  'programa_id',
  'pdf',
] as const) {}

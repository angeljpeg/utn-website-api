import { PartialType } from '@nestjs/mapped-types';
import { CreateCarreraDto } from './create-carrera.dto';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateCarreraDto extends PartialType(CreateCarreraDto) {
  @IsNumber()
  @IsOptional()
  carrera_ing_id: number;
}

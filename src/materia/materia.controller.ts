import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MateriaService } from './materia.service';
import { ActualizarMateriaDto } from './dto/update-materia.dto';
import { CrearMateriaDto } from './dto/create-materia.dto';

@Controller('materia')
export class MateriaController {
  constructor(private readonly materiaService: MateriaService) {}

  @Get()
  async obtenerMaterias() {
    return this.materiaService.obtenerMaterias();
  }

  @Post()
  create(@Body() nuevaMateria: CrearMateriaDto) {
    return this.materiaService.crearMateria(nuevaMateria);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materiaService.obtenerMateriaPorId(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() nuevaMateria: ActualizarMateriaDto) {
    return this.materiaService.actualizarMateria(+id, nuevaMateria);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiaService.eliminarMateria(+id);
  }
}

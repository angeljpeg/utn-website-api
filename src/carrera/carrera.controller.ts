import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';

@Controller('carrera')
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {}

  @Post()
  create(@Body() createCarreraDto: CreateCarreraDto) {
    return this.carreraService.crearCarrera(createCarreraDto);
  }

  @Get()
  findAll() {
    return this.carreraService.traerCarreras();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carreraService.traerCarreraPorId(+id);
  }

  @Get(':slug')
  traerCarreraPorSlug(@Param('slug') slug: string) {
    return this.carreraService.traerCarreraPorSlug(slug);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarreraDto: UpdateCarreraDto) {
    return this.carreraService.actualizarCarrera(+id, updateCarreraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carreraService.eliminarCarrera(+id);
  }
}

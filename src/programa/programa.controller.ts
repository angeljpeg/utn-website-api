import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProgramaService } from './programa.service';
import { CrearProgramaDto } from './dto/create-programa.dto';
import { ActualizarProgramaDto } from './dto/update-programa.dto';

@Controller('programa')
export class ProgramaController {
  constructor(private readonly programaService: ProgramaService) {}

  @Post()
  create(@Body() nuevoPrograma: CrearProgramaDto) {
    return this.programaService.crearPrograma(nuevoPrograma);
  }

  @Get()
  findAll() {
    return this.programaService.traerProgramas();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programaService.traerProgramaPorId(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProgramaDto: ActualizarProgramaDto,
  ) {
    return this.programaService.actualizarProgramaPorId(+id, updateProgramaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programaService.eliminarProgramaPorId(+id);
  }
}

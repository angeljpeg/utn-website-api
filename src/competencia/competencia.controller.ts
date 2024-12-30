import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CompetenciaService } from './competencia.service';
import { CrearCompetenciaDto } from './dto/create-competencia.dto';
import { ActualizarCompetenciaDto } from './dto/update-competencia.dto';

@Controller('competencia')
export class CompetenciaController {
  constructor(private readonly competenciaService: CompetenciaService) {}

  @Get()
  async obtenerCompetencias() {
    return this.competenciaService.obtenerCompetencias();
  }

  @Post()
  create(@Body() nuevaCompetencia: CrearCompetenciaDto) {
    return this.competenciaService.crearCompetencias(nuevaCompetencia);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.competenciaService.obtenerCompetenciaPorId(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() nuevaCompetencia: ActualizarCompetenciaDto,
  ) {
    return this.competenciaService.actualizarCompetencia(+id, nuevaCompetencia);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.competenciaService.eliminarCompetencia(+id);
  }
}

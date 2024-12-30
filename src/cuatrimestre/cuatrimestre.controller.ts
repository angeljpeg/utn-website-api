import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CuatrimestreService } from './cuatrimestre.service';
import { CrearCuatrimestreDto } from './dto/create-cuatrimestre.dto';
import { ActualizarCuatrimestreDto } from './dto/update-cuatrimestre.dto';

@Controller('cuatrimestre')
export class CuatrimestreController {
  constructor(private readonly cuatrimestreService: CuatrimestreService) {}
  @Get()
  async obtenerCompetencias() {
    return this.cuatrimestreService.obtenerCuatrimestres();
  }

  @Post()
  create(@Body() nuevaCompetencia: CrearCuatrimestreDto) {
    return this.cuatrimestreService.crearCuatrimestre(nuevaCompetencia);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuatrimestreService.obtenerCuatrimestrePorId(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() nuevaCompetencia: ActualizarCuatrimestreDto,
  ) {
    return this.cuatrimestreService.actualizarCuatrimestre(
      +id,
      nuevaCompetencia,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cuatrimestreService.eliminarCuatrimestre(+id);
  }
}

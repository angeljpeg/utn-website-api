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
  async obtenerCuatrimestres() {
    return await this.cuatrimestreService.obtenerCuatrimestres();
  }

  @Post()
  async crearCuatrimestre(@Body() nuevoCuatrimestre: CrearCuatrimestreDto) {
    return await this.cuatrimestreService.crearCuatrimestre(nuevoCuatrimestre);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.cuatrimestreService.obtenerCuatrimestrePorId(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() nuevaCompetencia: ActualizarCuatrimestreDto,
  ) {
    return await this.cuatrimestreService.actualizarCuatrimestre(
      +id,
      nuevaCompetencia,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.cuatrimestreService.eliminarCuatrimestre(+id);
  }
}

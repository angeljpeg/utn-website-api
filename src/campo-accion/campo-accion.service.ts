import { Injectable } from '@nestjs/common';
import { CampoDeAccion } from './entities/campo-accion.entity';
import { CrearCampoDeAccionDto } from './dto/create-campo-accion.dto';
import { ActualizarCampoDeAccionDto } from './dto/update-campo-accion.dto';

@Injectable()
export class CampoAccionService {
  private camposDeAccion: CampoDeAccion[] = [];
  constructor() {}

  crearCampoDeAccion(materia: CrearCampoDeAccionDto) {
    const nuevoCampo = {
      campo_id: Math.floor(Math.random() * 2000),
      ...materia,
    };

    this.camposDeAccion.push(nuevoCampo);

    return nuevoCampo;
  }

  async obtenerCamposDeAccion() {
    return this.camposDeAccion;
  }

  async obtenerCampoPorId(campo_id: number) {
    return this.camposDeAccion.find((c) => c.campo_id === campo_id);
  }

  async actualizarCampo(
    campo_id: number,
    { descripcion }: ActualizarCampoDeAccionDto,
  ) {
    const materiaEncontrada = this.camposDeAccion.find(
      (c) => c.campo_id === campo_id,
    );

    if (!materiaEncontrada) {
      return null;
    }

    materiaEncontrada.descripcion = descripcion;

    return materiaEncontrada;
  }

  async eliminarCampo(campo_id: number) {
    this.camposDeAccion = this.camposDeAccion.filter(
      (c) => c.campo_id !== campo_id,
    );

    return 'Campo Eliminada';
  }
}

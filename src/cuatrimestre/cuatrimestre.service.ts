import { Injectable } from '@nestjs/common';
import { CrearCuatrimestreDto } from './dto/create-cuatrimestre.dto';
import { ActualizarCuatrimestreDto } from './dto/update-cuatrimestre.dto';
import { Cuatrimestre } from './entities/cuatrimestre.entity';

@Injectable()
export class CuatrimestreService {
  private cuatrimestres: Cuatrimestre[] = [];

  constructor() {}

  async crearCuatrimestre(numero: CrearCuatrimestreDto) {
    /*     const nuevoCuatrimestre = {
      cuatrimestre_id: Math.floor(Math.random() * 2000),
      ...numero,
    };

    this.cuatrimestres.push(nuevoCuatrimestre);

    return nuevoCuatrimestre; */
  }

  async obtenerCuatrimestres() {
    /*     return this.cuatrimestres; */
  }

  async obtenerCuatrimestrePorId(cuatrimestre_id: number) {
    /*     return this.cuatrimestres.find(
      (c) => c.cuatrimestre_id === cuatrimestre_id,
    ); */
  }

  async actualizarCuatrimestre(
    cuatrimestre_id: number,
    { numero }: ActualizarCuatrimestreDto,
  ) {
    /*     const competenciaEncontrada = this.cuatrimestres.find(
      (c) => c.cuatrimestre_id === cuatrimestre_id,
    );

    if (!competenciaEncontrada) {
      return null;
    }

    competenciaEncontrada.numero = numero;

    return competenciaEncontrada; */
  }

  async eliminarCuatrimestre(cuatrimestre_id: number) {
    /*     this.cuatrimestres = this.cuatrimestres.filter(
      (c) => c.cuatrimestre_id !== cuatrimestre_id,
    );

    return this.cuatrimestres; */
  }
}

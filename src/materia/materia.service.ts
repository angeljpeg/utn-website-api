import { Injectable } from '@nestjs/common';
import { Materia } from './entities/materia.entity';
import { CrearMateriaDto } from './dto/create-materia.dto';
import { ActualizarMateriaDto } from './dto/update-materia.dto';

@Injectable()
export class MateriaService {
  private materias = [];
  constructor() {}

  crearMateria(materia: CrearMateriaDto) {
    const nuevaMateria = {
      materia_id: Math.floor(Math.random() * 2000),
      ...materia,
    };

    this.materias.push(nuevaMateria);

    return nuevaMateria;
  }

  async obtenerMaterias() {
    return this.materias;
  }

  async obtenerMateriaPorId(materia_id: number) {
    return this.materias.find((m) => m.materia_id === materia_id);
  }

  async actualizarMateria(
    materia_id: number,
    { materia }: ActualizarMateriaDto,
  ) {
    const materiaEncontrada = this.materias.find(
      (m) => m.materia_id === materia_id,
    );

    if (!materiaEncontrada) {
      return null;
    }

    materiaEncontrada.materia = materia;

    return materiaEncontrada;
  }

  async eliminarMateria(materia_id: number) {
    this.materias = this.materias.filter((m) => m.materia_id !== materia_id);

    return 'Materia Eliminada';
  }
}

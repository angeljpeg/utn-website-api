import { Injectable } from '@nestjs/common';
import { Materia } from './entities/materia.entity';
import { CrearMateriaDto } from './dto/create-materia.dto';
import { ActualizarMateriaDto } from './dto/update-materia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuatrimestre } from '@/cuatrimestre/entities/cuatrimestre.entity';

@Injectable()
export class MateriaService {
  private materias = [];
  constructor(
    @InjectRepository(Materia)
    private readonly MateriaRepository: Repository<Materia>,
    @InjectRepository(Cuatrimestre)
    private readonly CuatrimestreRepository: Repository<Cuatrimestre>,
  ) {}

  async crearMateria(materia: CrearMateriaDto): Promise<Materia> {
    const nuevaMateria = this.MateriaRepository.create(materia);

    await this.MateriaRepository.save(nuevaMateria);

    return nuevaMateria;
  }

  async obtenerMaterias(): Promise<[Materia[], number]> {
    return await this.MateriaRepository.findAndCount({
      relations: ['cuatrimestre'],
    });
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

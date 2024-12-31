import { Injectable, NotFoundException } from '@nestjs/common';
import { Materia } from './entities/materia.entity';
import { CrearMateriaDto } from './dto/create-materia.dto';
import { ActualizarMateriaDto } from './dto/update-materia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuatrimestre } from '@/cuatrimestre/entities/cuatrimestre.entity';

@Injectable()
export class MateriaService {
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
    return await this.MateriaRepository.findAndCount();
  }

  async obtenerMateriaPorId(materia_id: number): Promise<Materia> {
    const materia = await this.MateriaRepository.findOne({
      where: { materia_id },
    });

    if (!materia) {
      throw new NotFoundException();
    }

    return materia;
  }

  async actualizarMateria(
    materia_id: number,
    datosActualizados: ActualizarMateriaDto,
  ): Promise<Materia> {
    await this.obtenerMateriaPorId(materia_id);

    await this.MateriaRepository.update(materia_id, datosActualizados);

    const materia = await this.obtenerMateriaPorId(materia_id);

    return materia;
  }

  async eliminarMateria(materia_id: number): Promise<{ message: string }> {
    const materia = await this.obtenerMateriaPorId(materia_id);

    await this.MateriaRepository.remove(materia);

    return { message: `Materia #${materia_id} ha sido elimindada` };
  }
}

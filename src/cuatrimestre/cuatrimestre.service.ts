import { Injectable, NotFoundException } from '@nestjs/common';
import { CrearCuatrimestreDto } from './dto/create-cuatrimestre.dto';
import { ActualizarCuatrimestreDto } from './dto/update-cuatrimestre.dto';
import { Cuatrimestre } from './entities/cuatrimestre.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Materia } from '@/materia/entities/materia.entity';

@Injectable()
export class CuatrimestreService {
  constructor(
    @InjectRepository(Cuatrimestre)
    private readonly cuatriRepo: Repository<Cuatrimestre>,
    @InjectRepository(Materia)
    private readonly materiaRepo: Repository<Materia>,
  ) {}

  async crearCuatrimestre(cuatrimestre: CrearCuatrimestreDto) {
    const nuevoCuatrimestre = await this.cuatriRepo.create(cuatrimestre);

    await this.cuatriRepo.save(nuevoCuatrimestre);

    return nuevoCuatrimestre;
  }

  async obtenerCuatrimestres() {
    return await this.cuatriRepo.findAndCount({ relations: ['materias'] });
  }

  async obtenerCuatrimestrePorId(cuatrimestre_id: number) {
    const cuatrimestre = await this.cuatriRepo.findOne({
      relations: ['materias'],
      where: { cuatrimestre_id },
    });

    if (!cuatrimestre) {
      throw new NotFoundException();
    }

    return cuatrimestre;
  }

  async actualizarCuatrimestre(
    cuatrimestre_id: number,
    nuevosDatos: ActualizarCuatrimestreDto,
  ) {
    const cuatrimestreEncontrado =
      await this.obtenerCuatrimestrePorId(cuatrimestre_id);

    if (!cuatrimestreEncontrado) {
      return null;
    }

    await this.cuatriRepo.update(cuatrimestre_id, nuevosDatos);

    const cuatrimestre = await this.obtenerCuatrimestrePorId(cuatrimestre_id);

    return cuatrimestre;
  }

  async eliminarCuatrimestre(cuatrimestre_id: number) {
    const cuatrimestre = await this.obtenerCuatrimestrePorId(cuatrimestre_id);

    await this.cuatriRepo.remove(cuatrimestre);

    return { message: `Cuatrimestre #${cuatrimestre_id} ha sido eliminado` };
  }
}

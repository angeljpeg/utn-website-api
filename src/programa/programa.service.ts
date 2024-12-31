import { Injectable, NotFoundException } from '@nestjs/common';
import { CrearProgramaDto } from './dto/create-programa.dto';
import { ActualizarProgramaDto } from './dto/update-programa.dto';
import { Programa } from './entities/programa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrera } from '@/carrera/entities/carrera.entity';

@Injectable()
export class ProgramaService {
  constructor(
    @InjectRepository(Programa)
    private readonly ProgramaRepo: Repository<Programa>,
    @InjectRepository(Carrera)
    private readonly CarreraRepo: Repository<Carrera>,
  ) {}

  async crearPrograma(programa: CrearProgramaDto): Promise<Programa> {
    const nuevoPrograma = await this.ProgramaRepo.create(programa);

    await this.ProgramaRepo.save(nuevoPrograma);

    return nuevoPrograma;
  }

  async traerProgramas(): Promise<[Programa[], number]> {
    return await this.ProgramaRepo.findAndCount({ relations: ['carreras'] });
  }

  async traerProgramaPorId(programa_id: number) {
    const programa = await this.ProgramaRepo.findOne({
      where: { programa_id },
    });
    if (!programa) {
      throw new NotFoundException(
        `El programa con ID #${programa_id} no existe.`,
      );
    }

    return programa;
  }

  async actualizarProgramaPorId(
    programa_id: number,
    datosActualizados: ActualizarProgramaDto,
  ): Promise<Programa> {
    await this.traerProgramaPorId(programa_id);

    await this.ProgramaRepo.update(programa_id, datosActualizados);

    const programa = await this.traerProgramaPorId(programa_id);

    return programa;
  }

  async eliminarProgramaPorId(
    programa_id: number,
  ): Promise<{ message: string }> {
    await this.traerProgramaPorId(programa_id);

    await this.ProgramaRepo.delete(programa_id);

    return { message: `El programa con ID #${programa_id} ha sido eliminado.` };
  }
}

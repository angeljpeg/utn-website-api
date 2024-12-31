import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { Carrera } from './entities/carrera.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CrearIngieneriaDto } from './dto/create-ingieneria.dto';

@Injectable()
export class CarreraService {
  constructor(
    @InjectRepository(Carrera)
    private readonly carreraRepo: Repository<Carrera>,
  ) {}

  async crearCarrera(nuevaCarrera: CreateCarreraDto): Promise<Carrera> {
    const carreraExistente = await this.traerCarreraPorSlug(nuevaCarrera.slug);

    if (carreraExistente) {
      throw new BadRequestException('Ya existe una carrera con este slug.');
    }

    const carrera = this.carreraRepo.create(nuevaCarrera);
    return this.carreraRepo.save(carrera);
  }

  async crearIngieneria(nuevaIngenieria: CrearIngieneriaDto): Promise<Carrera> {
    const carrera = this.carreraRepo.create(nuevaIngenieria);
    return this.carreraRepo.save(carrera);
  }

  async traerCarreras(): Promise<[Carrera[], number]> {
    return this.carreraRepo.findAndCount({ relations: ['carreraIng'] });
  }

  async traerCarreraPorId(carreraId: number): Promise<Carrera> {
    const carrera = await this.carreraRepo.findOne({
      where: { carrera_id: carreraId },
    });

    if (!carrera) {
      throw new NotFoundException(
        `No se encontró una carrera con ID #${carreraId}.`,
      );
    }

    return carrera;
  }

  async traerCarreraPorSlug(slug: string): Promise<Carrera | null> {
    const carrera = await this.carreraRepo.findOne({ where: { slug } });

    if (!carrera) {
      throw new NotFoundException(
        `No se encontró una carrera con slug ${slug}.`,
      );
    }

    return carrera;
  }

  async actualizarCarrera(
    carreraId: number,
    datosActualizados: UpdateCarreraDto,
  ): Promise<Carrera> {
    const carrera = await this.traerCarreraPorId(carreraId);

    Object.assign(carrera, datosActualizados);
    return this.carreraRepo.save(carrera);
  }

  async eliminarCarrera(carreraId: number): Promise<{ message: string }> {
    const carrera = await this.traerCarreraPorId(carreraId);

    await this.carreraRepo.remove(carrera);
    return {
      message: `La carrera con ID #${carreraId} ha sido eliminada exitosamente.`,
    };
  }
}

import { Injectable } from '@nestjs/common';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { Carrera } from './entities/carrera.entity';

@Injectable()
export class CarreraService {
  private carreras: Carrera[] = [];

  async crearCarrera(nuevaCarrera: CreateCarreraDto): Promise<void> {
    /*     const carrera = {
      carrera_id: Math.floor(Math.random() * 2000 + 1),
      ...nuevaCarrera,
    };

    this.carreras.push(carrera);

    return carrera; */
  }

  async traerCarreras(): Promise<Carrera[]> {
    return;
  }

  async traerCarreraPorId(carreraId: number): Promise<Carrera> {
    const carrera = this.carreras.find((c) => carreraId === c.carrera_id);
    return carrera;
  }

  async traerCarreraPorSlug(slug: string): Promise<Carrera> {
    const carrera = this.carreras.find((c) => slug === c.slug);
    return carrera;
  }

  async actualizarCarrera(
    carreraId: number,
    datosActualizados: UpdateCarreraDto,
  ): Promise<string> {
    const index = this.carreras.findIndex((c) => c.carrera_id === carreraId);

    if (index === -1) {
      return `No se encontró un programa con ID #${carreraId}.`;
    }

    return `El programa con ID #${carreraId} ha sido actualizado exitosamente.`;
  }

  async eliminarCarrera(carreraId: number): Promise<string> {
    const index = this.carreras.findIndex((c) => c.carrera_id === carreraId);

    if (index === -1) {
      return `No se encontró un programa con ID #${carreraId}.`;
    }

    this.carreras.splice(index, 1);
    return `El programa con ID #${carreraId} ha sido eliminado exitosamente.`;
  }
}

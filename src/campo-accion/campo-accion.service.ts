import { Injectable, NotFoundException } from '@nestjs/common';
import { CampoDeAccion } from './entities/campo-accion.entity';
import { CrearCampoDeAccionDto } from './dto/create-campo-accion.dto';
import { ActualizarCampoDeAccionDto } from './dto/update-campo-accion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CampoAccionService {
  private camposDeAccion: CampoDeAccion[] = [];
  constructor(
    @InjectRepository(CampoDeAccion)
    private readonly CampoRepository: Repository<CampoDeAccion>,
  ) {}

  async crearCampoDeAccion(campo: CrearCampoDeAccionDto) {
    const nuevoCampo = await this.CampoRepository.create(campo);

    await this.CampoRepository.save(nuevoCampo);

    return nuevoCampo;
  }

  async obtenerCamposDeAccion() {
    return await this.CampoRepository.findAndCount();
  }

  async obtenerCampoPorId(campo_id: number) {
    const campo = await this.CampoRepository.findOne({ where: { campo_id } });

    if (!campo) {
      throw new NotFoundException();
    }

    return campo;
  }

  async actualizarCampo(campo_id: number, datos: ActualizarCampoDeAccionDto) {
    await this.obtenerCampoPorId(campo_id);

    await this.CampoRepository.update(campo_id, datos);

    const campo = this.obtenerCampoPorId(campo_id);

    return campo;
  }

  async eliminarCampo(campo_id: number) {
    const campo = await this.obtenerCampoPorId(campo_id);

    await this.CampoRepository.remove(campo);

    return { message: `Campo de Accion #${campo_id} ha sido eliminado` };
  }
}

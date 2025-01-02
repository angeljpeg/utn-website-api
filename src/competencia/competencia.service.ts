import { Injectable, NotFoundException } from '@nestjs/common';
import { CrearCompetenciaDto } from './dto/create-competencia.dto';
import { ActualizarCompetenciaDto } from './dto/update-competencia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Competencia } from './entities/competencia.entitie';
import { Repository } from 'typeorm';

@Injectable()
export class CompetenciaService {
  constructor(
    @InjectRepository(Competencia)
    private readonly competenciasRepo: Repository<Competencia>,
  ) {}

  async crearCompetencias(datos: CrearCompetenciaDto) {
    const competencia = await this.competenciasRepo.create(datos);

    await this.competenciasRepo.save(competencia);

    return competencia;
  }

  async obtenerCompetencias() {
    return await this.competenciasRepo.findAndCount();
  }

  async obtenerCompetenciaPorId(competencia_id: number) {
    const competencia = await this.competenciasRepo.findOne({
      where: { competencia_id },
    });

    if (!competencia) {
      throw new NotFoundException();
    }

    return competencia;
  }

  async actualizarCompetencia(
    competencia_id: number,
    datos: ActualizarCompetenciaDto,
  ) {
    await this.obtenerCompetenciaPorId(competencia_id);

    await this.competenciasRepo.update(competencia_id, datos);

    const competencia = await this.obtenerCompetenciaPorId(competencia_id);

    return competencia;
  }

  async eliminarCompetencia(competencia_id: number) {
    const competencia = await this.obtenerCompetenciaPorId(competencia_id);

    await this.competenciasRepo.remove(competencia);

    return { message: `Competencia #${competencia_id} ha sido eliminada` };
  }
}

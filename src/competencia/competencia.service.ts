import { Injectable } from '@nestjs/common';
import { CrearCompetenciaDto } from './dto/create-competencia.dto';
import { ActualizarCompetenciaDto } from './dto/update-competencia.dto';

@Injectable()
export class CompetenciaService {
  private competencias = [];

  constructor() {}

  async crearCompetencias(competencia: CrearCompetenciaDto) {
    const nuevaCompetencia = {
      competencia_id: Math.floor(Math.random() * 2000),
      ...competencia,
    };

    this.competencias.push(nuevaCompetencia);

    return nuevaCompetencia;
  }

  async obtenerCompetencias() {
    return this.competencias;
  }

  async obtenerCompetenciaPorId(competencia_id: number) {
    return this.competencias.find((c) => c.competencia_id === competencia_id);
  }

  async actualizarCompetencia(
    competencia_id: number,
    { competencia }: ActualizarCompetenciaDto,
  ) {
    const competenciaEncontrada = this.competencias.find(
      (c) => c.competencia_id === competencia_id,
    );

    if (!competenciaEncontrada) {
      return null;
    }

    competenciaEncontrada.competencia = competencia;

    return competenciaEncontrada;
  }

  async eliminarCompetencia(competencia_id: number) {
    this.competencias = this.competencias.filter(
      (c) => c.competencia_id !== competencia_id,
    );

    return this.competencias;
  }
}

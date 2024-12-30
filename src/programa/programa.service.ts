import { Injectable } from '@nestjs/common';
import { CrearProgramaDto } from './dto/create-programa.dto';
import { ActualizarProgramaDto } from './dto/update-programa.dto';
import { Programa } from './entities/programa.entity';

@Injectable()
export class ProgramaService {
  private programas: Programa[] = [
    {
      programa_id: 12,
      titulo: 'generico 1',
      icon: 'generico 1',
    },
    {
      programa_id: 24,
      titulo: 'generico 2',
      icon: 'generico 2',
    },
  ];

  async crearPrograma(nuevoPrograma: CrearProgramaDto): Promise<Programa> {
    const programa = {
      programa_id: Math.floor(Math.random() * 2000 + 1),
      ...nuevoPrograma,
    };

    this.programas.push(programa);

    return programa;
  }

  async traerProgramas(): Promise<Programa[]> {
    return this.programas;
  }

  async traerProgramaPorId(programaId: number): Promise<Programa> {
    const programa = this.programas.find((p) => programaId === p.programa_id);
    return programa;
  }

  async actualizarProgramaPorId(
    programaId: number,
    datosActualizados: ActualizarProgramaDto,
  ): Promise<string> {
    const index = this.programas.findIndex(
      (programa) => programa.programa_id === programaId,
    );

    if (index === -1) {
      return `No se encontró un programa con ID #${programaId}.`;
    }

    this.programas[index] = {
      ...this.programas[index],
      ...datosActualizados,
    };

    return `El programa con ID #${programaId} ha sido actualizado exitosamente.`;
  }

  async eliminarProgramaPorId(programaId: number): Promise<string> {
    const index = this.programas.findIndex(
      (programa) => programa.programa_id === programaId,
    );

    if (index === -1) {
      return `No se encontró un programa con ID #${programaId}.`;
    }

    this.programas.splice(index, 1);
    return `El programa con ID #${programaId} ha sido eliminado exitosamente.`;
  }
}

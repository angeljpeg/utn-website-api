import { carreraTypes } from '@/common/interfaces/carrera-type.interface';

export class Carrera {
  carrera_id: number;
  titulo: string;
  type: typeof carreraTypes;
  area?: string;
  competencias?: string[];
  pdf?: string;
  banner?: string;
  cuatrimestres?: string[];
}

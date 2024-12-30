import { Carrera } from '@/carrera/entities/carrera.entity';

export class Programa {
  programa_id: number;
  titulo: string;
  icon: string;
  carreras?: Carrera[];
}

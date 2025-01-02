import { Carrera } from '@/carrera/entities/carrera.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('competencias')
export class Competencia {
  @PrimaryGeneratedColumn('increment')
  competencia_id: number;

  @Column({ type: 'text' })
  competencia: string;

  @Column({ type: 'int' })
  carrera_id: number;

  @ManyToOne(() => Carrera, (carrera) => carrera.competencias)
  @JoinColumn({ name: 'carrera_id' })
  carrera: Carrera;
}

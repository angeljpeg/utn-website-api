import { Cuatrimestre } from '@/cuatrimestre/entities/cuatrimestre.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('materias')
export class Materia {
  @PrimaryGeneratedColumn('increment')
  materia_id: number;

  @Column({ type: 'text' })
  materia: string;

  @ManyToOne(() => Cuatrimestre, (cuatrimestre) => cuatrimestre.materias)
  @JoinColumn({ name: 'cuatrimestre_id' })
  cuatrimestre: Cuatrimestre;
}

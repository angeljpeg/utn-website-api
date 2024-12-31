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

  @Column({ type: 'int' })
  cuatrimestre_id: number;

  @ManyToOne(() => Cuatrimestre, (cuatrimestre) => cuatrimestre.materias)
  @JoinColumn({ name: 'cuatrimestre_id' })
  cuatrimestre: Cuatrimestre;
}

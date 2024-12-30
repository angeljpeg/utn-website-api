import { Cuatrimestre } from '@/cuatrimestre/entities/cuatrimestre.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('materias')
export class Materia {
  @PrimaryGeneratedColumn('increment')
  materia_id: number;

  @Column({ type: 'text' })
  materia: string;

  @ManyToOne(() => Cuatrimestre, (cuatrimestre) => cuatrimestre.materias)
  cuatrimestre: Cuatrimestre[];
}

import { Carrera } from '@/carrera/entities/carrera.entity';
import { Materia } from '@/materia/entities/materia.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('cuatrimestres')
export class Cuatrimestre {
  @PrimaryGeneratedColumn('increment')
  cuatrimestre_id: number;

  @Column({ type: 'int', nullable: false })
  numero: number;

  @OneToMany(() => Materia, (materia) => materia.cuatrimestre)
  materias: Materia[];

  @ManyToOne(() => Carrera, (carrera) => carrera.cuatrimestres)
  carrera: Carrera;
}

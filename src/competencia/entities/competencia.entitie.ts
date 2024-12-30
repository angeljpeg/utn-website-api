import { Carrera } from '@/carrera/entities/carrera.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('competencias')
export class Competencia {
  @PrimaryGeneratedColumn('increment')
  competencia_id: number;

  @Column({ type: 'text' })
  competencia: string;

  @ManyToOne(() => Carrera, (carrera) => carrera.competencias)
  carrera: Carrera;
}

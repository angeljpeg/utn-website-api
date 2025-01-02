import { Carrera } from '@/carrera/entities/carrera.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('campos_de_accion')
export class CampoDeAccion {
  @PrimaryGeneratedColumn('increment')
  campo_id: number;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'int' })
  carrera_id: number;

  @ManyToOne(() => Carrera, (carrera) => carrera.camposDeAccion)
  @JoinColumn({ name: 'carrera_id' })
  carrera: Carrera;
}

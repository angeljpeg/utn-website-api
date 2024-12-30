import { Carrera } from '@/carrera/entities/carrera.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('campos_de_accion')
export class CampoDeAccion {
  @PrimaryGeneratedColumn('increment')
  campo_id: number;

  @Column({ type: 'text' })
  descripcion: string;

  @ManyToOne(() => Carrera, (carrera) => carrera.camposDeAccion)
  carrera: Carrera;
}

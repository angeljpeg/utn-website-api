import { Carrera } from '@/carrera/entities/carrera.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('programas')
export class Programa {
  @PrimaryGeneratedColumn('increment')
  programa_id: number;

  @Column({ type: 'varchar', length: 100 })
  titulo: string;

  @Column({ type: 'varchar', length: 25 })
  icon: string;

  @OneToMany(() => Carrera, (carrera) => carrera.programa)
  carreras: Carrera[];
}

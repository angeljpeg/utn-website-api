import { CampoDeAccion } from '@/campo-accion/entities/campo-accion.entity';
import { carreraTypes } from '@/common/interfaces/carrera-type.interface';
import { Competencia } from '@/competencia/entities/competencia.entitie';
import { Cuatrimestre } from '@/cuatrimestre/entities/cuatrimestre.entity';
import { Programa } from '@/programa/entities/programa.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('carreras')
export class Carrera {
  @PrimaryGeneratedColumn('identity')
  carrera_id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  titulo: string;

  @Column({ type: 'varchar', length: 255, nullable: true, unique: true })
  slug: string;

  @Column({ type: 'enum', enum: carreraTypes, nullable: false })
  type: (typeof carreraTypes)[keyof typeof carreraTypes];

  @Column({ type: 'text', nullable: true })
  area?: string;

  @Column({ type: 'text', nullable: true })
  pdf?: string;

  @Column({
    type: 'text',
    default:
      'https://res.cloudinary.com/dlfckf5zp/image/upload/v1735593951/carreras/carreras-default.avif',
  })
  banner?: string;

  @Column({
    type: 'text',
    default:
      'https://res.cloudinary.com/dlfckf5zp/image/upload/v1735593951/carreras/carreras-default.avif',
  })
  img_competencias?: string;

  // relations
  @OneToMany(() => Competencia, (competencia) => competencia.carrera, {
    nullable: true,
  })
  competencias?: Competencia[];

  @OneToMany(() => CampoDeAccion, (campo) => campo.carrera, {
    nullable: true,
  })
  camposDeAccion?: CampoDeAccion[];

  @OneToMany(() => Cuatrimestre, (cuatrimestre) => cuatrimestre.carrera, {
    nullable: true,
  })
  cuatrimestres?: Cuatrimestre[];

  @Column({ type: 'int', nullable: true }) // Añadir esta columna
  programa_id: number;

  @ManyToOne(() => Programa, (programa) => programa.carreras)
  @JoinColumn({ name: 'programa_id' })
  programa: Programa;

  @Column({ type: 'int', nullable: true })
  carrera_ing_id?: number;

  @OneToMany(() => Carrera, (carrera) => carrera.carreraIng)
  tsuCarreras?: Carrera[];

  @ManyToOne(() => Carrera, (carrera) => carrera.tsuCarreras)
  @JoinColumn({ name: 'carrera_ing_id' })
  carreraIng?: Carrera;
}

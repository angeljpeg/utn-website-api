import { CampoDeAccion } from '@/campo-accion/entities/campo-accion.entity';
import { carreraTypes } from '@/common/interfaces/carrera-type.interface';
import { Competencia } from '@/competencia/entities/competencia.entitie';
import { Cuatrimestre } from '@/cuatrimestre/entities/cuatrimestre.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('carreras')
export class Carrera {
  @PrimaryGeneratedColumn('identity')
  carrera_id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  titulo: string;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  slug: string;

  @Column({ type: 'enum', enum: carreraTypes, nullable: false })
  type: (typeof carreraTypes)[keyof typeof carreraTypes];

  @Column({ type: 'text' })
  area?: string;

  @Column({ type: 'text' })
  pdf?: string;

  @Column({
    type: 'text',
    nullable: false,
    default:
      'https://res.cloudinary.com/dlfckf5zp/image/upload/v1735593951/carreras/carreras-default.avif',
  })
  banner?: string;

  @Column({
    type: 'text',
    nullable: false,
    default:
      'https://res.cloudinary.com/dlfckf5zp/image/upload/v1735593951/carreras/carreras-default.avif',
  })
  img_competencias?: string;

  // relations
  @OneToMany(() => Competencia, (competencia) => competencia.carrera)
  competencias?: Competencia[];

  @OneToMany(() => Cuatrimestre, (cuatrimestre) => cuatrimestre.carrera)
  cuatrimestres?: Cuatrimestre[];

  @OneToMany(() => CampoDeAccion, (campo) => campo.carrera)
  camposDeAccion?: CampoDeAccion[];
}

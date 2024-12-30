import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('competencias')
export class Competencia {
  @PrimaryGeneratedColumn('increment')
  competencia_id: number;

  @Column({ type: 'text' })
  competencia: string;
}

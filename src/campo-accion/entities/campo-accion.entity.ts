import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('campos_de_accion')
export class CampoDeAccion {
  @PrimaryGeneratedColumn('increment')
  campo_id: number;

  @Column({ type: 'text' })
  descripcion: string;
}

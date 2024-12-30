import { Module } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { CarreraController } from './carrera.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrera } from './entities/carrera.entity';
import { Competencia } from '@/competencia/entities/competencia.entitie';
import { Cuatrimestre } from '@/cuatrimestre/entities/cuatrimestre.entity';
import { CampoDeAccion } from '@/campo-accion/entities/campo-accion.entity';
import { Programa } from '@/programa/entities/programa.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Carrera,
      Competencia,
      Cuatrimestre,
      CampoDeAccion,
      Programa,
    ]),
  ],
  controllers: [CarreraController],
  providers: [CarreraService],
})
export class CarreraModule {}

import { Module } from '@nestjs/common';
import { CompetenciaService } from './competencia.service';
import { CompetenciaController } from './competencia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Competencia } from './entities/competencia.entitie';
import { Carrera } from '@/carrera/entities/carrera.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Competencia, Carrera])],
  providers: [CompetenciaService],
  controllers: [CompetenciaController],
})
export class CompetenciaModule {}

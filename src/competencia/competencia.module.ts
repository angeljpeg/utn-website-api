import { Module } from '@nestjs/common';
import { CompetenciaService } from './competencia.service';
import { CompetenciaController } from './competencia.controller';

@Module({
  providers: [CompetenciaService],
  controllers: [CompetenciaController]
})
export class CompetenciaModule {}

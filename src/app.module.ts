import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProgramaModule } from './programa/programa.module';
import { CarreraModule } from './carrera/carrera.module';
import { CompetenciaModule } from './competencia/competencia.module';
import { MateriaModule } from './materia/materia.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProgramaModule,
    CarreraModule,
    CompetenciaModule,
    MateriaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

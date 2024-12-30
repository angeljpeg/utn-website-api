import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProgramaModule } from './programa/programa.module';
import { CarreraModule } from './carrera/carrera.module';
import { CompetenciaModule } from './competencia/competencia.module';
import { MateriaModule } from './materia/materia.module';
import { CampoAccionModule } from './campo-accion/campo-accion.module';
import { CuatrimestreModule } from './cuatrimestre/cuatrimestre.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProgramaModule,
    CarreraModule,
    CompetenciaModule,
    MateriaModule,
    CampoAccionModule,
    CuatrimestreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { CuatrimestreService } from './cuatrimestre.service';
import { CuatrimestreController } from './cuatrimestre.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuatrimestre } from './entities/cuatrimestre.entity';
import { Carrera } from '@/carrera/entities/carrera.entity';
import { Materia } from '@/materia/entities/materia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cuatrimestre, Carrera, Materia])],
  providers: [CuatrimestreService],
  controllers: [CuatrimestreController],
})
export class CuatrimestreModule {}

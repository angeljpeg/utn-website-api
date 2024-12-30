import { Module } from '@nestjs/common';
import { MateriaController } from './materia.controller';
import { MateriaService } from './materia.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Materia } from './entities/materia.entity';
import { Cuatrimestre } from '@/cuatrimestre/entities/cuatrimestre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Materia, Cuatrimestre])],
  controllers: [MateriaController],
  providers: [MateriaService],
})
export class MateriaModule {}

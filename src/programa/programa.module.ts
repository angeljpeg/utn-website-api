import { Module } from '@nestjs/common';
import { ProgramaService } from './programa.service';
import { ProgramaController } from './programa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programa } from './entities/programa.entity';
import { Carrera } from '@/carrera/entities/carrera.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Programa, Carrera])],
  controllers: [ProgramaController],
  providers: [ProgramaService],
})
export class ProgramaModule {}

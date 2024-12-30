import { Module } from '@nestjs/common';
import { CampoAccionService } from './campo-accion.service';
import { CampoAccionController } from './campo-accion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampoDeAccion } from './entities/campo-accion.entity';
import { Carrera } from '@/carrera/entities/carrera.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CampoDeAccion, Carrera])],
  providers: [CampoAccionService],
  controllers: [CampoAccionController],
})
export class CampoAccionModule {}

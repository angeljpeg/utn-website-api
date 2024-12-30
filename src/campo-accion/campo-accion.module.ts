import { Module } from '@nestjs/common';
import { CampoAccionService } from './campo-accion.service';
import { CampoAccionController } from './campo-accion.controller';

@Module({
  providers: [CampoAccionService],
  controllers: [CampoAccionController]
})
export class CampoAccionModule {}

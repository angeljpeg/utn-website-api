import { Module } from '@nestjs/common';
import { CuatrimestreService } from './cuatrimestre.service';
import { CuatrimestreController } from './cuatrimestre.controller';

@Module({
  providers: [CuatrimestreService],
  controllers: [CuatrimestreController]
})
export class CuatrimestreModule {}

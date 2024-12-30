import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProgramaModule } from './programa/programa.module';
import { CarreraModule } from './carrera/carrera.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProgramaModule,
    CarreraModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

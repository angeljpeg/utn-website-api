import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database.service';
import { DataSourceOptions } from 'typeorm';
import { DatabaseModule } from './database.module';

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  imports: [DatabaseModule],
  inject: [DatabaseService],
  async useFactory(
    databaseService: DatabaseService,
  ): Promise<DataSourceOptions> {
    const dbConfig: DataSourceOptions = {
      type: databaseService.getDatabaseType() as any,
      host: databaseService.getDatabaseHost(),
      port: databaseService.getDatabasePort(),
      username: databaseService.getDatabaseUsername(),
      password: databaseService.getDatabasePassword(),
      database: databaseService.getDatabaseName(),
      autoLoadEntities: true,
      synchronize: databaseService.getIsDevelopment(),
      logging: databaseService.getDatabaseLogging(),
    } as DataSourceOptions;

    return dbConfig;
  },
});

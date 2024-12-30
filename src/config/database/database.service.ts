import { Enviroment } from '@/common/interfaces/enviroment.interface';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService {
  constructor(private readonly configService: ConfigService) {}

  getDatabaseType(): string {
    return this.configService.get('DATABASE_TYPE');
  }

  getDatabasePort(): number {
    return +this.configService.get('DATABASE_PORT');
  }

  getDatabaseHost(): string {
    return this.configService.get('DATABASE_HOST');
  }

  getDatabaseUsername(): string {
    return this.configService.get('DATABASE_USERNAME');
  }

  getDatabasePassword(): string {
    return this.configService.get('DATABASE_PASSWORD');
  }

  getDatabaseName(): string {
    return this.configService.get('DATABASE_NAME');
  }

  getDatabaseLogging(): string {
    return this.configService.get('DATABASE_LOGGING');
  }

  getIsDevelopment(): boolean {
    return this.configService.get('NODE_ENV') !== Enviroment.Production;
  }
}

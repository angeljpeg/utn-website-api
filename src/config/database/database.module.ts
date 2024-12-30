import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseService } from './database.service';

@Module({
  imports: [ConfigModule], // Ensure ConfigModule is imported
  providers: [DatabaseService],
  exports: [DatabaseService], // Export to make it available in other modules
})
export class DatabaseModule {}

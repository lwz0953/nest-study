import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './modules/core/core.module';
import { database } from './config/database.config';

@Module({
  imports: [CoreModule.forRoot({ database: database() })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

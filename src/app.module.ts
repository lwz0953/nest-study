import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { contentModule } from './modules/content/content.module'

@Module({
    imports: [contentModule],

    // imports: [CoreModule.forRoot({ database: database() })],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}

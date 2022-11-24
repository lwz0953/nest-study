import { Module } from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'

import { User } from '@/modules/content/test-typeorm/user.entity'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserController } from './modules/content/test-typeorm/user.controller'

import { UserService } from './modules/content/test-typeorm/user.service'

@Module({
    imports: [
        // 配置数据库连接2
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '123456',
            database: 'hotel',
            synchronize: true,
            logger: 'simple-console',
            entities: [`${__dirname}/../**/*.entity.{js,ts}`],
            logging: ['query']
        }),
        TypeOrmModule.forFeature([User])
    ],

    // imports: [CoreModule.forRoot({ database: database() })],
    controllers: [AppController, UserController],
    providers: [AppService, UserService]
})
export class AppModule {}

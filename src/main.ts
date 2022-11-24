import { NestFactory } from '@nestjs/core'

import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { useContainer } from 'class-validator'

import { AppModule } from './app.module'

async function bootstrap() {
    // setRunEnv();
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
        logger: ['error']
    })
    useContainer(app.select(AppModule), { fallbackOnErrors: true })
    app.setGlobalPrefix('api')
    await app.listen(3100, '0.0.0.0')
}

bootstrap()

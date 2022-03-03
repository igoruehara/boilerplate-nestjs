import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';

import express = require('express');

const binaryMimeTypes: string[] = [];

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
    if (!cachedServer) {
        const expressApp = express();
        const nestApp = await NestFactory.create(
            AppModule,
            new ExpressAdapter(expressApp),
        );
        // nestApp.enableCors({
        //     origin:"*"
        // })

        const options = new DocumentBuilder()
            .setTitle('Boilerplate')
            .setDescription('Simple CRUD')
            .setVersion('1.0')
            .addTag('CRUD')
            .addBearerAuth(
                {
                    in: 'header',
                    type: 'http',
                    name: 'JWT',
                    scheme: 'bearer',
                    description: 'Enter JWT token',
                    bearerFormat: 'JWT'
                },
                'JWT-auth',
            )
            .build();

        const document = SwaggerModule.createDocument(nestApp, options);
        SwaggerModule.setup('docs', nestApp, document);

        nestApp.use(eventContext());
        await nestApp.init();
        cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
    }
    return cachedServer;
}

export const handler: Handler = async (event: any, context: Context) => {
    context.callbackWaitsForEmptyEventLoop = false
    cachedServer = await bootstrapServer();
    return proxy(cachedServer, event, context, 'PROMISE').promise;
};
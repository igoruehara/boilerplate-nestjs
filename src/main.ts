
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes()
  //app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }))
  await app.listen(3000);
}
bootstrap();
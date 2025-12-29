import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import loadConfiguration from './configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configuration = loadConfiguration();

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  if (process.env.ENV !== 'production') {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Solid API')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);

    SwaggerModule.setup('docs', app, document);
  }

  app.enableCors(configuration.cors);
  await app.listen(configuration.port);
}

bootstrap();

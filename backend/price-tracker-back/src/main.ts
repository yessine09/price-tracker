import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //enable cros for our frontend
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('User example')
    .setDescription('The User API description')
    .setVersion('1.0')
    .addBearerAuth(
      {
        description: 'Enter your AccessToken',
        name: 'Authorization',
        scheme: 'Bearer',
        type: 'http',
        bearerFormat: 'JWT',
        in: 'Header',
      },
      'access-token',
    )
    .addBearerAuth(
      {
        description: 'Enter ur RefreshToken',
        name: 'Autorization',
        scheme: 'Bearer',
        type: 'http',
        bearerFormat: 'JWT',
        in: 'Header',
      },
      'refresh-token',
    )
    .addTag('auth')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

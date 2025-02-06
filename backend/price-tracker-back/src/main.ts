import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:5173',
      'http://localhost:3000',
      'https://price-tracker-8va2kv5q5-yessine09s-projects.vercel.app',
    ],
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
    .addTag('stocks')
    .addTag('historical-price')
    .addTag('watchlist')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

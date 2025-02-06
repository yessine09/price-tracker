import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as serverless from 'serverless-http'; // Make sure to import serverless

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS configuration
  app.enableCors({
    origin: [
      'http://localhost:5173', // Local frontend URL
      'http://localhost:3000', // Local backend URL
      'https://price-tracker-8va2kv5q5-yessine09s-projects.vercel.app', // Your Vercel production frontend URL
      'https://your-vercel-frontend-url.vercel.app', // Add your Vercel frontend URL here
    ],
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true, // Allow credentials like cookies if necessary
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
        description: 'Enter your RefreshToken',
        name: 'Authorization',
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

  // Use serverless-http for Vercel
  if (process.env.NODE_ENV === 'production') {
    return serverless(app.getHttpAdapter().getInstance());
  } else {
    await app.listen(3000); // For local development
  }
}

bootstrap();

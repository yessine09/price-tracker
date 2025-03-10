import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { StocksModule } from './stocks/stocks.module';
import { WatchlistModule } from './watchlist/watchlist.module';
import { HistoricalPriceModule } from './historical-price/historical-price.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'DB-TRACKER',
    }),
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    StocksModule,
    WatchlistModule,
    HistoricalPriceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log(
      'JWT_ACCESS_TOKEN_SECRET:',
      process.env.JWT_ACCESS_TOKEN_SECRET,
    );
  }
}

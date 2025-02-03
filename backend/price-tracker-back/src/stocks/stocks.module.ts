import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { stockSchema } from './entities/stock.entity';
import { HistoricalPriceModule } from 'src/historical-price/historical-price.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'stocks', schema: stockSchema }]),
    HistoricalPriceModule,
  ],
  controllers: [StocksController],
  providers: [StocksService],
  exports: [StocksService],
})
export class StocksModule {}

import { Module } from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { WatchlistController } from './watchlist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WatchlistSchema } from './entities/watchlist.entity';
import { StocksModule } from 'src/stocks/stocks.module';
import { stockSchema } from 'src/stocks/entities/stock.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'watchlists', schema: WatchlistSchema },
    ]),
    MongooseModule.forFeature([{ name: 'stocks', schema: stockSchema }]),
  ],
  controllers: [WatchlistController],
  providers: [WatchlistService],
  exports: [WatchlistService],
})
export class WatchlistModule {}

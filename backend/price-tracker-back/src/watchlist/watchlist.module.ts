import { Module } from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { WatchlistController } from './watchlist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WatchlistSchema } from './entities/watchlist.entity';
import { ActionModule } from 'src/action/action.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'watchlists', schema: WatchlistSchema },
    ]),
    ActionModule,
  ],
  controllers: [WatchlistController],
  providers: [WatchlistService],
  exports: [WatchlistService],
})
export class WatchlistModule {}

import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { IWatchlist } from './interface/watchlist.interface';
import { ApiTags } from '@nestjs/swagger';

@Controller('watchlist')
@ApiTags('watchlist')
export class WatchlistController {
  constructor(private readonly watchlistService: WatchlistService) {}

  @Post(':userId/add/:actionId')
  async addToWatchlist(
    @Param('userId') userId: string,
    @Param('actionId') actionId: string,
  ): Promise<IWatchlist> {
    return this.watchlistService.addToWatchlist(userId, actionId);
  }

  @Delete(':userId/remove/:actionId')
  async removeFromWatchlist(
    @Param('userId') userId: string,
    @Param('actionId') actionId: string,
  ): Promise<IWatchlist> {
    return this.watchlistService.removeFromWatchlist(userId, actionId);
  }

  @Get(':userId')
  async getWatchlist(@Param('userId') userId: string): Promise<IWatchlist> {
    return this.watchlistService.getWatchlistByUser(userId);
  }
}

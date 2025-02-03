import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { IWatchlist } from './interface/watchlist.interface';
import { ApiTags } from '@nestjs/swagger';

@Controller('watchlist')
@ApiTags('watchlist')
export class WatchlistController {
  constructor(private readonly watchlistService: WatchlistService) {}

  @Post(':userId/add/:stockId')
  async addToWatchlist(
    @Param('userId') userId: string,
    @Param('stockId') stockId: string,
  ): Promise<IWatchlist> {
    return this.watchlistService.addToWatchlist(userId, stockId);
  }

  @Delete(':userId/remove/:stockId')
  async removeFromWatchlist(
    @Param('userId') userId: string,
    @Param('stockId') stockId: string,
  ): Promise<IWatchlist> {
    return this.watchlistService.removeFromWatchlist(userId, stockId);
  }

  @Get(':userId')
  async getWatchlist(@Param('userId') userId: string): Promise<IWatchlist> {
    return this.watchlistService.getWatchlistByUser(userId);
  }
}

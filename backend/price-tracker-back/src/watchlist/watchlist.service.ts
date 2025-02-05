// src/watchlist/watchlist.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IWatchlist } from './interface/watchlist.interface';

import { IStock } from 'src/stocks/interface/stocks.interface';

@Injectable()
export class WatchlistService {
  constructor(
    @InjectModel('watchlists') private watchlistModel: Model<IWatchlist>,
    @InjectModel('stocks') private stockModel: Model<IStock>,
  ) {}

  async addToWatchlist(userId: string, stockId: string): Promise<IWatchlist> {
    let watchlist = await this.watchlistModel.findOne({ user: userId }).exec();

    if (!watchlist) {
      watchlist = new this.watchlistModel({ user: userId, stocks: [] });
      await watchlist.save(); 
    }

    const stock = await this.stockModel.findById(stockId).exec();
    if (!stock) {
      throw new NotFoundException('Stock not found');
    }

    const existingStockIndex = watchlist.stocks.findIndex(
      (existingStock) => existingStock.symbol === stock.symbol,
    );

    if (existingStockIndex !== -1) {
      watchlist.stocks[existingStockIndex] = stock;
      await watchlist.save();
      console.log(`Updated ${stock.symbol} in the watchlist.`);
    } else {
      watchlist.stocks.push(stock);
      await watchlist.save();
      console.log(`Added ${stock.symbol} to the watchlist.`);
    }

    return watchlist;
  }

  async removeFromWatchlist(
    userId: string,
    stockId: string,
  ): Promise<IWatchlist> {
    const watchlist = await this.watchlistModel
      .findOne({ user: userId })
      .exec();

    if (!watchlist) {
      throw new NotFoundException('Watchlist not found for this user');
    }

    watchlist.stocks = watchlist.stocks.filter(
      (stock) => stock._id.toString() !== stockId,
    );
    await watchlist.save();

    return watchlist;
  }

  async getWatchlistByUser(userId: string): Promise<IWatchlist> {
    const watchlist = await this.watchlistModel
      .findOne({ user: userId })
      .exec();

    if (!watchlist) {
      throw new NotFoundException('Watchlist not found for this user');
    }

    const stocks = await this.stockModel
      .find({
        _id: { $in: watchlist.stocks }, 
      })
      .exec();

    watchlist.stocks = stocks;

    return watchlist;
  }
}

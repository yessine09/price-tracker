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

  /*  async addToWatchlist(userId: string, stockId: string): Promise<IWatchlist> {
    let watchlist = await this.watchlistModel.findOne({ user: userId }).exec();

    // Si la watchlist n'existe pas, on en crée une nouvelle
    if (!watchlist) {
      // Création d'une nouvelle watchlist pour l'utilisateur
      watchlist = new this.watchlistModel({ user: userId, stocks: [] });
      await watchlist.save(); // Enregistre la nouvelle watchlist dans la base de données
    }

    // Récupérer l'stock à ajouter
    const stock = await this.stockModel.findById(stockId).exec();
    if (!stock) {
      throw new NotFoundException('Stock not found');
    }

    // Vérifier si l'stock est déjà dans la watchlist, sinon, on l'ajoute
    if (
      !watchlist.stocks.some(
        (existingstock) => existingstock._id.toString() === stockId,
      )
    ) {
      watchlist.stocks.push(stock);
      await watchlist.save();
      console.log(watchlist.stocks); // Vérifie que l'stock a bien été ajoutée à la watchlist
    }

    return watchlist;
  } */

  async addToWatchlist(userId: string, stockId: string): Promise<IWatchlist> {
    let watchlist = await this.watchlistModel.findOne({ user: userId }).exec();

    // If the watchlist doesn't exist, create a new one
    if (!watchlist) {
      watchlist = new this.watchlistModel({ user: userId, stocks: [] });
      await watchlist.save(); // Save the new watchlist
    }

    // Retrieve the stock to add
    const stock = await this.stockModel.findById(stockId).exec();
    if (!stock) {
      throw new NotFoundException('Stock not found');
    }

    // Look for the existing stock by symbol in the watchlist
    const existingStockIndex = watchlist.stocks.findIndex(
      (existingStock) => existingStock.symbol === stock.symbol,
    );

    if (existingStockIndex !== -1) {
      // If the stock exists, replace the old stock with the new one (by symbol)
      watchlist.stocks[existingStockIndex] = stock;
      await watchlist.save();
      console.log(`Updated ${stock.symbol} in the watchlist.`);
    } else {
      // If the stock doesn't exist, add it to the watchlist
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

    // Retirer l'stock de la watchlist
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

    // Peupler les stocks manuellement
    const stocks = await this.stockModel
      .find({
        _id: { $in: watchlist.stocks }, // Récupérer les stocks qui correspondent aux ObjectId dans la watchlist
      })
      .exec();

    watchlist.stocks = stocks;

    return watchlist;
  }
}

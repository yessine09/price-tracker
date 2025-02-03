// src/watchlist/watchlist.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; // Pas besoin de 'Types' puisque déjà géré par Mongoose pour ObjectId
import { Watchlist } from './entities/watchlist.entity';
import { Action } from 'src/action/entities/action.entity';
import { IWatchlist } from './interface/watchlist.interface';
import { IAction } from 'src/action/interface/action.interface';

@Injectable()
export class WatchlistService {
  constructor(
    @InjectModel('watchlists') private watchlistModel: Model<IWatchlist>,
    @InjectModel('Action') private actionModel: Model<IAction>,
  ) {}

  async addToWatchlist(userId: string, actionId: string): Promise<IWatchlist> {
    let watchlist = await this.watchlistModel.findOne({ user: userId }).exec();

    // Si la watchlist n'existe pas, on en crée une nouvelle
    if (!watchlist) {
      // Création d'une nouvelle watchlist pour l'utilisateur
      watchlist = new this.watchlistModel({ user: userId, actions: [] });
      await watchlist.save(); // Enregistre la nouvelle watchlist dans la base de données
    }

    // Récupérer l'action à ajouter
    const action = await this.actionModel.findById(actionId).exec();
    if (!action) {
      throw new NotFoundException('Action not found');
    }
    console.log(action); // Vérifie que l'action est bien récupérée et que son format est correct

    // Vérifier si l'action est déjà dans la watchlist, sinon, on l'ajoute
    if (
      !watchlist.actions.some(
        (existingAction) => existingAction._id.toString() === actionId,
      )
    ) {
      watchlist.actions.push(action);
      await watchlist.save();
      console.log(watchlist.actions); // Vérifie que l'action a bien été ajoutée à la watchlist
    }

    return watchlist;
  }

  async removeFromWatchlist(
    userId: string,
    actionId: string,
  ): Promise<IWatchlist> {
    const watchlist = await this.watchlistModel
      .findOne({ user: userId })
      .exec();

    if (!watchlist) {
      throw new NotFoundException('Watchlist not found for this user');
    }

    // Retirer l'action de la watchlist
    watchlist.actions = watchlist.actions.filter(
      (action) => action._id.toString() !== actionId,
    );
    await watchlist.save();

    return watchlist;
  }

  async getWatchlistByUser(userId: string): Promise<IWatchlist> {
    const watchlist = await this.watchlistModel
      .findOne({ user: userId })
      /*    .populate({
        path: 'actions', // Indique le chemin du champ à peupler
        model: 'Action', // Spécifie le modèle Action pour le peuplement
      }) */
      .exec();

    if (!watchlist) {
      throw new NotFoundException('Watchlist not found for this user');
    }
    // Peupler les actions manuellement

    const actions = await this.actionModel
      .find({
        _id: { $in: watchlist.actions }, // Récupérer les actions qui correspondent aux ObjectId dans la watchlist
      })
      .exec();

    watchlist.actions = actions; // Remplacer les ObjectId par les objets action

    return watchlist;
  }
}

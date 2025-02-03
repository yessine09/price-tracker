// src/watchlist/entities/watchlist.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Action } from 'src/action/entities/action.entity';
import { User } from 'src/users/entities/user.entity';

@Schema({ timestamps: true })
export class Watchlist {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: User;  // L'utilisateur auquel appartient cette watchlist

  @Prop({ type: [Types.ObjectId], ref: 'Action', required: true })
  actions: Action[];  // Liste des actions dans la watchlist

  @Prop({ default: Date.now })
  createdAt: Date;  // Date de création de la watchlist
}

export const WatchlistSchema = SchemaFactory.createForClass(Watchlist);

// src/watchlist/entities/watchlist.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Stock } from 'src/stocks/entities/stock.entity';
import { User } from 'src/users/entities/user.entity';

@Schema({ timestamps: true })
export class Watchlist {
  @Prop({ type: Types.ObjectId, ref: 'users', required: true })
  user: User;  // L'utilisateur auquel appartient cette watchlist

  @Prop({ type: [Types.ObjectId], ref: 'stocks', required: true })
  stocks: Stock[];  // Liste des actions dans la watchlist

}

export const WatchlistSchema = SchemaFactory.createForClass(Watchlist);

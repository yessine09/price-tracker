import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Action extends Document {
  @Prop({ required: true })
  symbol: string; // Exemple : 'AAPL', 'TSLA'

  @Prop({ required: true })
  currentPrice: number; // Prix actuel de l'action

  @Prop({ required: true })
  percentageChange: number; // Changement en pourcentage de l'action
}

export const ActionSchema = SchemaFactory.createForClass(Action);

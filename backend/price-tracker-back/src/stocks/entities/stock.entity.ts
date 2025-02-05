import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Stock {
  @Prop({ required: true })
  symbol: string;  // Le symbole de l'action, par exemple "AAPL"

  @Prop({ required: true })
  currentPrice: number;  // Le prix actuel de l'action

  @Prop({ required: true })
  percentageChange: number;  // Le changement en pourcentage de l'action
  
  @Prop({ type: String, required: true })
  date: string;  // La date du prix récupéré

}

export const stockSchema = SchemaFactory.createForClass(Stock);

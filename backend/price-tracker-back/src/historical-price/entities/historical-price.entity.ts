import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class HistoricalPrice {
  @Prop({ required: true })
  symbol: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  open: number;

  @Prop({ required: true })
  high: number;

  @Prop({ required: true })
  low: number;

  @Prop({ required: true })
  close: number;

  @Prop({ required: true })
  volume: number;
}

export const historicalPriceSchema =
  SchemaFactory.createForClass(HistoricalPrice);

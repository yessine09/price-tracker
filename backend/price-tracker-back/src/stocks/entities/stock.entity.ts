import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Stock {
  @Prop({ required: true })
  symbol: string;  

  @Prop({ required: true })
  currentPrice: number;  

  @Prop({ required: true })
  percentageChange: number; 
  
  @Prop({ type: String, required: true })
  date: string;  

}

export const stockSchema = SchemaFactory.createForClass(Stock);

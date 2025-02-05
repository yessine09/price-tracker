import { Document } from 'mongoose';

export interface IStock extends Document {
  readonly symbol: string;
  readonly currentPrice: number;
  readonly percentageChange: number;
  readonly date: Date;
}

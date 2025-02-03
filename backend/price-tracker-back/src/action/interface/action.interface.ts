import { Document } from 'mongoose';

export interface IAction extends Document {
  symbol: string;
  currentPrice: number;
  percentageChange: number;
}

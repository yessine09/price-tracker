import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly symbol: string;
  readonly date: Date;
  readonly open: number;
  readonly high: number;
  readonly low: number;
  readonly close: number;
  readonly volume: number;
}

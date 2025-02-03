import { Document } from 'mongoose';
import { IStock } from 'src/stocks/interface/stocks.interface';
import { IUser } from 'src/users/interface/users.interface';

export interface IWatchlist extends Document {
  user: IUser;
  stocks: IStock[];
}

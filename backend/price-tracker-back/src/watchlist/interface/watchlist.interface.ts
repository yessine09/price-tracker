import { Date, Document } from 'mongoose';
import { IAction } from 'src/action/interface/action.interface';
import { IUser } from 'src/users/interface/users.interface';

export interface IWatchlist extends Document {
  user: IUser;
  actions: IAction[];
  createdAt: Date;
}

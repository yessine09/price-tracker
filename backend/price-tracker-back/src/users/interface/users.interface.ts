import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly name: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly refreshToken: string;
}

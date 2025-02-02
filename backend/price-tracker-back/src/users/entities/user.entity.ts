import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as argon2 from 'argon2';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  refreshToken?: string;

  @Prop({ default: false })
  isActive: boolean;
}

export const userSchema = SchemaFactory.createForClass(User).pre(
  'save',
  async function () {
    this.password = await argon2.hash(this.password);
  },
);

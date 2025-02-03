// src/actions/actions.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Action } from './entities/action.entity';
import { IAction } from './interface/action.interface';

@Injectable()
export class ActionsService {
  constructor(@InjectModel('Action') private actionModel: Model<IAction>) {}

  async create(
    symbol: string,
    currentPrice: number,
    percentageChange: number,
  ): Promise<IAction> {
    const action = new this.actionModel({
      symbol,
      currentPrice,
      percentageChange,
    });
    return await action.save();
  }

  async findAll(): Promise<IAction[]> {
    return await this.actionModel.find().exec();
  }

  async findBySymbol(symbol: string): Promise<IAction> {
    const action = await this.actionModel.findOne({ symbol }).exec();
    if (!action) {
      throw new NotFoundException(`Action with symbol ${symbol} not found`);
    }
    return action;
  }
}

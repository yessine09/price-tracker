// src/actions/actions.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ActionsService } from './action.service';
import { IAction } from './interface/action.interface';
import { ApiTags } from '@nestjs/swagger';
import { CreateActionDto } from './dto/create-action.dto';

@Controller('actions')
@ApiTags('actions')
export class ActionsController {
  constructor(private readonly actionsService: ActionsService) {}

  @Post('create')
  async create(
    @Body()
    @Body() createActionDto: CreateActionDto,
  ): Promise<IAction> {
    return this.actionsService.create(
      createActionDto.symbol,
      createActionDto.currentPrice,
      createActionDto.percentageChange,
    );
  }

  @Get()
  async findAll(): Promise<IAction[]> {
    return this.actionsService.findAll();
  }

  @Get(':symbol')
  async findBySymbol(@Param('symbol') symbol: string): Promise<IAction> {
    return this.actionsService.findBySymbol(symbol);
  }
}

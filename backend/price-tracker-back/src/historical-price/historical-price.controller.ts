import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HistoricalPriceService } from './historical-price.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('historical-price')
@ApiTags('historical-price')
export class HistoricalPriceController {
  constructor(
    private readonly historicalPriceService: HistoricalPriceService,
  ) {}

  @Get(':symbol')
  async getStockHistory(@Param('symbol') symbol: string) {
    if (!symbol) {
      throw new HttpException('Symbol is required', HttpStatus.BAD_REQUEST);
    }
    return this.historicalPriceService.getStockHistory(symbol);
  }

  @Get('last7/:symbol')
  async getLast7HistoricalPrices(@Param('symbol') symbol: string) {
    try {
      return await this.historicalPriceService.getLast7HistoricalPrices(symbol);
    } catch (error) {
      throw new HttpException(error.message, error.getStatus());
    }
  }
}

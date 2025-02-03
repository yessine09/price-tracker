import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StocksService } from './stocks.service';

@Controller('stocks')
@ApiTags('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get(':symbol')
  async getStock(@Param('symbol') symbol: string) {
    return this.stocksService.getStockPrice(symbol);
  }

  @Get(':symbol/history')
  async getStockHistory(@Param('symbol') symbol: string) {
    return this.stocksService.getStockHistory(symbol);
  }
}

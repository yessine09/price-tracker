import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Res,
} from '@nestjs/common';
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

  @Get()
  async getTheLastStocks() {
    return this.stocksService.getTheLastStock();
  }

  @Get('latest/:symbol')
  async getLatestStockData(@Param('symbol') symbol: string) {
    try {
      const latestStockData = await this.stocksService.getLastStockData(symbol);
      return latestStockData;
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to retrieve stock data',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Get('getOne/:id')
  async findOne(@Param('id') id: string, @Res() response) {
    try {
      const stock = await this.stocksService.findOne(id);
      return response.status(HttpStatus.OK).json({
        message: 'Find stock done !',
        status: HttpStatus.OK,
        data: stock,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null,
      });
    }
  }
}

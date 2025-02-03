// src/stocks/dto/create-historical-price.dto.ts
import { IsString, IsNumber, IsDate } from 'class-validator';

export class CreateHistoricalPriceDto {
  @IsString()
  symbol: string;

  @IsDate()
  date: Date;

  @IsNumber()
  open: number;

  @IsNumber()
  high: number;

  @IsNumber()
  low: number;

  @IsNumber()
  close: number;

  @IsNumber()
  volume: number;
}

import { Module } from '@nestjs/common';
import { HistoricalPriceService } from './historical-price.service';
import { HistoricalPriceController } from './historical-price.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { historicalPriceSchema } from './entities/historical-price.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'historicalPrice', schema: historicalPriceSchema },
    ]),
  ],
  controllers: [HistoricalPriceController],
  providers: [HistoricalPriceService],
  exports: [HistoricalPriceService],
})
export class HistoricalPriceModule {}

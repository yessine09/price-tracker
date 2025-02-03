import { PartialType } from '@nestjs/swagger';
import { CreateHistoricalPriceDto } from './create-historical-price.dto';

export class UpdateHistoricalPriceDto extends PartialType(CreateHistoricalPriceDto) {}

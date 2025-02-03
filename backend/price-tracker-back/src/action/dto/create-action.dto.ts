import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateActionDto {
  @ApiProperty({
    type: String,
    description: 'The symbol of the stock (e.g., AAPL, TSLA)',
    example: 'AAPL', // Exemple de valeur
  })
  @IsString()
  symbol: string;

  @ApiProperty({
    type: Number,
    description: 'The current price of the stock',
    example: 150.0, // Exemple de valeur
  })
  @IsNumber()
  currentPrice: number;

  @ApiProperty({
    type: Number,
    description: 'The percentage change of the stock',
    example: 1.5, // Exemple de valeur
  })
  @IsNumber()
  percentageChange: number;
}

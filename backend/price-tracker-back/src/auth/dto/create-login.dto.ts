import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLoginDto {
  @ApiProperty({
    type: String,
    description: 'this is required field!',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
    description: 'this is required field!',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}

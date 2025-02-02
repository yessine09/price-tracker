import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateLoginDto } from './dto/create-login.dto';
import { AccessTokenGuard } from 'src/guards/accessToken.guard';
import { RefreshTokenGuard } from 'src/guards/refreshToken.guard';
import { Request } from 'express';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.authService.signIn(createLoginDto);
  }

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth('access-token')
  @Get('logout')
  async logout(@Req() req: Request) {
    const userId = (req as any).user['sub'];

    return await this.authService.logOut(userId);
  }

  @UseGuards(RefreshTokenGuard)
  @ApiBearerAuth('refresh-token')
  @Get('refresh')
  refreshToken(@Req() req: Request) {
    const userId = (req as any).user['sub'];
    const refreshToken = (req as any).user['refreshToken'];
    return this.authService.refreshToken(userId, refreshToken);
  }
}

import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateLoginDto } from './dto/create-login.dto';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  //Method of SignIN
  async signIn(createLoginDto: CreateLoginDto) {
    const user = await this.usersService.findWithEmail(createLoginDto.email);

    if (!user) throw new UnauthorizedException('User does not exist');

    const passwordMatches = await argon2.verify(
      user.password,
      createLoginDto.password,
    );
    if (!passwordMatches)
      throw new UnauthorizedException('Password is incorrect');

    const userIdString = user._id.toString();
    const userEmailString = user.email.toString();

    //token
    const tokens = await this.generateToken(userIdString, user.email);
    console.log('token', tokens);

    await this.updateRefreshUser(userIdString, tokens.refreshToken);

    return { tokens, user };
  }

  //Method of GenerateToken&RefreshToken
  async generateToken(userId: string, email: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email: email,
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_TOKEN_SECRET'),
          expiresIn: '30d',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email: email,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
          expiresIn: '30d',
        },
      ),
    ]);
    return { accessToken, refreshToken };
  }

  //Method of Cryptage of refreshToken
  async updateRefreshUser(userId: string, refreshToken: string) {
    const hashedRefresh = await argon2.hash(refreshToken);
    await this.usersService.update(userId, { refreshToken: hashedRefresh });
  }

  //Method of Generate new Refresh Token
  async refreshToken(userId: string, refreshToken: string) {
    const user = await this.usersService.findOne(userId);
    if (!user || !user.refreshToken)
      throw new ForbiddenException('access denied');
    const refreshTokenMatches = await argon2.verify(
      user.refreshToken,
      refreshToken,
    );
    if (!refreshTokenMatches) throw new ForbiddenException('access denied');

    const userIdString = user._id.toString();
    const userEmailString = user.email.toString();

    const tokens = await this.generateToken(userIdString, user.email);
    await this.updateRefreshUser(userEmailString, tokens.refreshToken);
    return { tokens, user };
  }

  //Method of Logout
  async logOut(userId: string) {
    const updateRefreshNull = await this.usersService.update(userId, {
      refreshToken: null,
    });
    return updateRefreshNull;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id };
    console.log(payload, 'payloaaaaaaaaaaaad');
    const tokens = await this.generateToken(user._id, user.email);
    console.log('token', tokens);
    await this.updateRefreshUser(user._id, tokens.refreshToken);
    return { tokens, user };
  }

}

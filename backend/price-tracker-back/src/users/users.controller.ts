import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add')
  async create(@Body() createUserDto: CreateUserDto, @Res() res) {
    try {
      const newUser = await this.usersService.create(createUserDto);
      return res.status(HttpStatus.CREATED).json({
        message: 'User created Successfully',
        status: HttpStatus.CREATED,
        data: newUser,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null,
      });
    }
  }

  @Get('getAll')
  async findAll(@Res() response) {
    try {
      const findAllUsers = await this.usersService.findAll();
      return response.status(HttpStatus.OK).json({
        message: 'Find all Users done',
        status: HttpStatus.OK,
        data: findAllUsers,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null,
      });
    }
  }

  @Get('getOneUser/:id')
  async findOne(@Param('id') id: string, @Res() response) {
    try {
      const User = await this.usersService.findOne(id);
      return response.status(HttpStatus.OK).json({
        message: 'Find one User done !',
        status: HttpStatus.OK,
        data: User,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null,
      });
    }
  }

  @Patch('updateUser/:id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() response,
  ) {
    try {
      const updateUser = await this.usersService.update(id, updateUserDto);
      return response.status(HttpStatus.OK).json({
        message: 'Update User Done',
        status: HttpStatus.OK,
        data: updateUser,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null,
      });
    }
  }

  @Delete('deleteUser/:id')
  async remove(@Param('id') id: string, @Res() response) {
    try {
      const deleteUser = await this.usersService.remove(id);
      return response.status(HttpStatus.OK).json({
        message: 'Deleted User Successfully',
        status: HttpStatus.OK,
        data: deleteUser,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null,
      });
    }
  }

  @Get('findEmail')
  async findAllEmails(@Query('email') email: string, @Res() response) {
    try {
      const findEmail = await this.usersService.findWithEmail(email);
      return response.status(HttpStatus.OK).json({
        message: ' User email find Successfully',
        status: HttpStatus.OK,
        data: findEmail,
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

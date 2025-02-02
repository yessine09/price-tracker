import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interface/users.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('users')
    private userModel: Model<IUser>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const newUser = new this.userModel(createUserDto);
    return await newUser.save();
  }

  async findAll(): Promise<IUser[]> {
    const UserData = await this.userModel.find().exec();
    if (UserData.length === 0) {
      throw new NotFoundException('User does not found');
    }
    return UserData;
  }

  async findOne(id: string): Promise<IUser> {
    let User = await this.userModel.findById(id).exec();
    if (!User) {
      throw new NotFoundException(`User with id ${id} is not found`);
    }
    return User;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    let UserUpdate = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    if (!UserUpdate) {
      throw new NotFoundException(`User with id ${id} Not found!`);
    }

    return UserUpdate;
  }

  async remove(id: string): Promise<IUser> {
    let deleteUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deleteUser) {
      throw new NotFoundException(`User with id ${id} Not found!`);
    }
    return deleteUser;
  }
  //Method to find By email
  async findWithEmail(email: string): Promise<IUser> {
    let findEmail = await this.userModel.findOne({ email });
    if (!findEmail) {
      throw new NotFoundException(`User with email ${email}  not found`);
    }
    return findEmail;
  }
}

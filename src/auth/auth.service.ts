/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/interfaces/user.interface';
import { LoginDto, SignUpDto } from './dto/user-auth.dto';
@Injectable()
export class AuthService {
  constructor(@InjectModel('Auth') private readonly authModel: Model<Auth>) {}
  async getUsers(): Promise<Auth[]> {
    // return;
    return await this.authModel.find();
  }
  async createUser(user:SignUpDto):Promise<any> {
    const newUser = new this.authModel(user);
    const savedUser = await this.authModel.find({email:newUser.email})
    if(savedUser.length !== 0) return 'user already exist'
    return newUser.save()
    // return await this.authModel.create(user)
  }
  async login(userData:LoginDto):Promise<any> {
    const user = await this.authModel.findOne({email:userData.email})
    if(!user) return 'user does not exist with the given email'
    if(user.email === userData.email && user.password=== userData.password) {
      return 'login succeeded'
    }
    else{
      return 'please check your email and password'
    }
  }
}

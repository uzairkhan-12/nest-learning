/* eslint-disable prettier/prettier */
import { Controller, Get, Body, Post} from '@nestjs/common';
import { Auth } from 'src/auth/interfaces/user.interface';
import { AuthService } from './auth.service';
import {LoginDto, SignUpDto} from './dto/user-auth.dto'
@Controller('auth')
// const user = {name:"uzair" , email:"pk.uzikhan@gmail.com",password:"123xyz"}
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  getUser(): Promise<Auth[]> {
    return this.authService.getUsers();
  }
  @Post()
  createUser(@Body() signUpDto:SignUpDto) :Promise<Auth> {
    return this.authService.createUser(signUpDto)
    
  }
  @Post('login')
  login(@Body() loginDto:LoginDto): Promise<any> {
    return this.authService.login(loginDto)
  }
}

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from './auth.service';
// import { ItemSchema } from './schemas/item.schema';
import { AuthSchema } from './schemas/auth.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Auth', schema: AuthSchema }])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

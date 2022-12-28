/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface Auth extends Document {
  id?: string;
  name?: string;
  email: string;
  password: string;
}

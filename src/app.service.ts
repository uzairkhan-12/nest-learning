import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'In the name of ALLAH';
  }
  getGoodBye(): string {
    return 'good bye and good night beautiful people';
  }
}

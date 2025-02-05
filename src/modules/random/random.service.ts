/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class RandomService {

  getRandomNumber() {
    return { number: Math.floor(Math.random() * 100) +1 };
  }

}

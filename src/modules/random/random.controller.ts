/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { RandomService } from './random.service';

@Controller('random')
export class RandomController {
  constructor(private readonly _randomService: RandomService) {}

  @Get('number')
  getRandomNumber() {
    return this._randomService.getRandomNumber();
  }
}

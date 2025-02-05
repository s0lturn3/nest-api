/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { HoroscopeService } from './horoscope.service';

@Controller('horoscope')
export class HoroscopeController {
  constructor(private readonly _horoscopeService: HoroscopeService) {}

  @Get()
  getHoroscope(@Query('sign') sign: string) {
    return this._horoscopeService.getHoroscope(sign);
  }
}

/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
  constructor(private readonly _jokesService: JokesService) {}

  @Get()
  getJoke() {
    return this._jokesService.getJoke();
  }
}

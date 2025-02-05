/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConvertController } from './modules/convert/convert.controller';
import { ConvertService } from './modules/convert/convert.service';
import { HoroscopeController } from './modules/horoscope/horoscope.controller';
import { JokesController } from './modules/jokes/jokes.controller';
import { RandomController } from './modules/random/random.controller';
import { HoroscopeService } from './modules/horoscope/horoscope.service';
import { JokesService } from './modules/jokes/jokes.service';
import { RandomService } from './modules/random/random.service';

@Module({
  imports: [],
  controllers: [AppController, ConvertController, HoroscopeController, JokesController, RandomController],
  providers: [AppService, ConvertService, HoroscopeService, JokesService, RandomService],
})
export class AppModule {}

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConvertController } from './modules/convert/convert/convert.controller';
import { ConvertService } from './modules/convert/convert/convert.service';

@Module({
  imports: [],
  controllers: [AppController, ConvertController],
  providers: [AppService, ConvertService],
})
export class AppModule {}

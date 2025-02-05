/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { ConvertService } from './convert.service';

@Controller('convert')
export class ConvertController {
  constructor(private readonly _convertService: ConvertService) { }

  @Get('km-to-miles')
  convertKmToMiles(@Query('km') km: string) {
    return this._convertService.convertKmToMiles(km);
  }

}

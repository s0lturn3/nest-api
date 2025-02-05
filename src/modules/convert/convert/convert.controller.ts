/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('convert')
export class ConvertController {

  @Get()
  get(): string {
    return "AAA"
  }

}

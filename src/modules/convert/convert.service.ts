/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConvertService {
  
  /** Converte um valor em KM para Milhas */
  convertKmToMiles(km: string) {
    const miles = parseFloat(km) * 0.621371;
    return { km, miles: miles.toFixed(2) };
  }

}

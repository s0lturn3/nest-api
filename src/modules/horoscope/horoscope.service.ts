/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class HoroscopeService {

  private _predictions = [
    "Hoje será um dia cheio de oportunidades!",
    "Cuidado com decisões impulsivas.",
    "Grandes surpresas te aguardam!",
    "Evite conflitos, mantenha a paz.",
  ];

  getHoroscope(sign?: string) {
    if (!sign) throw new BadRequestException("O parâmetro 'sign' é obrigatório.");

    const randomIndex = Math.floor(Math.random() * this._predictions.length);
    return { sign, prediction: this._predictions[randomIndex] };
  }

}

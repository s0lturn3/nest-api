/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class JokesService {

  private _jokes = [
    "Por que o JavaScript foi ao médico? Porque tinha muitos callbacks!",
    "O que um código disse para o outro? Você me completa!",
    "Por que os programadores preferem o escuro? Porque a luz atrapalha o debugging!",
  ];

  public getJoke() {
    const randomIndex = Math.floor(Math.random() * this._jokes.length);
    return { joke: this._jokes[randomIndex] };
  }

}

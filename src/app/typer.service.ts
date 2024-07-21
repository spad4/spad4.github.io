import { Injectable } from '@angular/core';
import { interval, map, take, concat, of, delay, ignoreElements, from, concatMap, repeat } from 'rxjs';

interface TyperParams {
  word: string;
  speed: number;
  backwards?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TyperService {

  constructor() { }

  private type({ word, speed, backwards = false }: TyperParams) {
    return interval(speed).pipe(
      map(x => backwards ? word.substring(0, word.length - x) : word.substring(0, x + 1)),
      take(word.length + 1)
    );
  }

  typingEffect(word: string) {
    return concat(
      this.type({ word, speed: 50 }),
      of('').pipe(delay(3000), ignoreElements()),
      this.type({ word, speed: 30, backwards: true }),
      of('').pipe(delay(500), ignoreElements()),
      of('').pipe()
    );
  }

  getTypingEffect(titles: string[]) {
    return from(titles).pipe(
      concatMap(title => this.typingEffect(title)),
      repeat()
    );
 }
}



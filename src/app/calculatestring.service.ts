import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatestringService {

  constructor() { }
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }
    return 0;
  }
}

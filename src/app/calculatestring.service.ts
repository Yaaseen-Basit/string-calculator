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
    if (numbers.indexOf(",") === -1) {
      return parseInt(numbers, 10);
    }
    return numbers.split(",").map(num => parseInt(num, 10)).reduce((acc, num) => acc + num, 0);
    }
}

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
    var delimiter = /[\n,]/; // Default delimiter is comma or new line
    if (numbers.startsWith("//")) {
      var delimiterLineIndex = numbers.indexOf('\n');
      delimiter = new RegExp(numbers.substring(2, delimiterLineIndex));
      numbers = numbers.substring(delimiterLineIndex + 1);
    }
    var numberArray = numbers.split(delimiter).map(num => parseInt(num, 10));
    var negatives = numberArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
    }
    return numberArray.reduce((acc, num) => acc + num, 0);
  }

}

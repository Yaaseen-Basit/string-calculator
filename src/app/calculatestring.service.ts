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
    return numbers.split(delimiter).map(num => parseInt(num, 10)).reduce((acc, num) => acc + num, 0);
  
    }
    
}

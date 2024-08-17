import { TestBed } from '@angular/core/testing';

import { CalculatestringService } from './calculatestring.service';

describe('CalculatestringService', () => {
  var service: CalculatestringService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatestringService);
  });

  it('should return 0 for an empty string', () => {
    expect(service.add("")).toBe(0);
  });
  it('should return the number itself for a single number', () => {
    expect(service.add("1")).toBe(1);
  });
  
  it('should return the sum of two numbers', () => {
    expect(service.add("1,5")).toBe(6);
  });
  it('should handle new lines between numbers', () => {
    expect(service.add("1\n2,3")).toBe(6);
  });
  
});

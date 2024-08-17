import { TestBed } from '@angular/core/testing';

import { CalculatestringService } from './calculatestring.service';

describe('CalculatestringService', () => {
  let service: CalculatestringService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatestringService);
  });

  it('should return 0 for an empty string', () => {
    expect(service.add("")).toBe(0);
  });
});

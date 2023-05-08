import { TestBed } from '@angular/core/testing';

import { ForescastweatherService } from './forescastweather.service';

describe('ForescastweatherService', () => {
  let service: ForescastweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForescastweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

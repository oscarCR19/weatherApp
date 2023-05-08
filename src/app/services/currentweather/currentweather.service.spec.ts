import { TestBed } from '@angular/core/testing';

import { CurrentweatherService } from './currentweather.service';

describe('CurrentweatherService', () => {
  let service: CurrentweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

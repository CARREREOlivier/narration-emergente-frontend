import { TestBed } from '@angular/core/testing';

import { FanFictionsService } from './fan-fictions.service';

describe('FanFictionsService', () => {
  let service: FanFictionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FanFictionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

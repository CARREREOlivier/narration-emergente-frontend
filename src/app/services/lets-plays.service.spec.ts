import { TestBed } from '@angular/core/testing';

import { LetsPlaysService } from './lets-plays.service';

describe('LetsPlaysService', () => {
  let service: LetsPlaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetsPlaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TollServiceService } from './toll-service.service';

describe('TollServiceService', () => {
  let service: TollServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TollServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

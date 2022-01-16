import { TestBed } from '@angular/core/testing';

import { NasaFetchService } from './nasa-fetch.service';

describe('NasaFetchService', () => {
  let service: NasaFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

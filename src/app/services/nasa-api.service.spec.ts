import { TestBed } from '@angular/core/testing';

import { NasaApiService } from './nasa-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NasaApiService', () => {
  let service: NasaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NasaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

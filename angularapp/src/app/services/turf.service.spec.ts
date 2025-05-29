import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TurfService } from './turf.service';

describe('TurfService', () => {
  let service: TurfService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TurfService]
    });
    service = TestBed.inject(TurfService);
  });

  fit('Frontend_should_create_Turf_Service', () => {
    expect(service).toBeTruthy();
  });
});

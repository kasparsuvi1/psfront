import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OccupationService } from './occupation.service';

describe('OccupationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OccupationService]
    });
  });

  it('should be created', inject([OccupationService], (service: OccupationService) => {
    expect(service).toBeTruthy();
  }));
});

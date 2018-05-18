import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DegreeService } from './degree.service';

describe('DegreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DegreeService]
    });
  });

  it('should be created', inject([DegreeService], (service: DegreeService) => {
    expect(service).toBeTruthy();
  }));
});

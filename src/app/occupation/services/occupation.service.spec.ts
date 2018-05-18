import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OccupationService } from './occupation.service';

describe('OccupationService', () => {

  let occupationService: OccupationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OccupationService]
    });

  occupationService = TestBed.get(OccupationService);
  httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([HttpTestingController, OccupationService], (httpClient: HttpTestingController, service: OccupationService) => {
    expect(service).toBeTruthy();
  }));
});

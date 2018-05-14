import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AdvertService } from './advert.service';

describe('AdvertService', () => {

  let advertService: AdvertService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdvertService]
    });

    advertService = TestBed.get(AdvertService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([HttpTestingController, AdvertService], (httpClient: HttpTestingController, service: AdvertService) => {
    expect(service).toBeTruthy();
  }));
});

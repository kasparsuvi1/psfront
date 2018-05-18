import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ResponseService } from './response.service';

describe('ResponseService', () => {

  let responseService: ResponseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResponseService]
    });

    responseService = TestBed.get(ResponseService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([HttpTestingController, ResponseService], (httpClient: HttpTestingController, service: ResponseService) => {
    expect(service).toBeTruthy();
  }));
});

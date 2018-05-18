import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RestoService } from './resto.service';

describe('RestoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestoService]
    });
  });

  it('should be created', inject([RestoService], (service: RestoService) => {
    expect(service).toBeTruthy();
  }));
});

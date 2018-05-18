import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HotelService } from './hotel.service';

describe('HotelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HotelService]
    });
  });

  it('should be created', inject([HotelService], (service: HotelService) => {
    expect(service).toBeTruthy();
  }));
});

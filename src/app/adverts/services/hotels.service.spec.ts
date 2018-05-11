import { TestBed, inject } from '@angular/core/testing';

import { HotelService } from './hotels.service';

describe('HotelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelService]
    });
  });

  it('should be created', inject([HotelService], (service: HotelService) => {
    expect(service).toBeTruthy();
  }));
});

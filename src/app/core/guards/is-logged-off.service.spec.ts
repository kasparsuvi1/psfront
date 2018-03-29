import { TestBed, inject } from '@angular/core/testing';

import { IsLoggedOffService } from './is-logged-off.service';

describe('IsLoggedOffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsLoggedOffService]
    });
  });

  it('should be created', inject([IsLoggedOffService], (service: IsLoggedOffService) => {
    expect(service).toBeTruthy();
  }));
});

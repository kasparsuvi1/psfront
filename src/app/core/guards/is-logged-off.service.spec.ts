import { TestBed, inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { IsLoggedOffService } from './is-logged-off.service';

describe('IsLoggedOffService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsLoggedOffService],
      imports: [Store]
    });
  });

  it('should be created', inject([IsLoggedOffService], (service: IsLoggedOffService) => {
    expect(service).toBeTruthy();
  }));
});

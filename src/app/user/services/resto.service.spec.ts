import { TestBed, inject } from '@angular/core/testing';

import { RestoService } from './resto.service';

describe('RestoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestoService]
    });
  });

  it('should be created', inject([RestoService], (service: RestoService) => {
    expect(service).toBeTruthy();
  }));
});

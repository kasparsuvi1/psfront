import { TestBed, inject } from '@angular/core/testing';

import { RespondService } from './respond.service';

describe('RespondService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RespondService]
    });
  });

  it('should be created', inject([RespondService], (service: RespondService) => {
    expect(service).toBeTruthy();
  }));
});

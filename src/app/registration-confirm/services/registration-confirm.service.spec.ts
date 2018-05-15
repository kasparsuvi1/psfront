import { TestBed, inject } from '@angular/core/testing';

import { RegistrationConfirmService } from './registration-confirm.service';

describe('RegistrationConfirmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationConfirmService]
    });
  });

  it('should be created', inject([RegistrationConfirmService], (service: RegistrationConfirmService) => {
    expect(service).toBeTruthy();
  }));
});

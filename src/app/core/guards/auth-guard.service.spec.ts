import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';

import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {

  let authGuardService: AuthGuardService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService],
      imports: [Store]
    });

  authGuardService = TestBed.get(AuthGuardService);
  httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([HttpTestingController, AuthGuardService], (httpClient: HttpTestingController, service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});

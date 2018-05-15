import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationConfirmService {
  constructor(private httpClient: HttpClient) {}

  registrationConfirm(token): Observable<any> {
    return this.httpClient.get(`/api/public/register/registration-confirm?token=${token}`).pipe(map(res => res));
  }
}

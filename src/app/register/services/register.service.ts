import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  register(payload) {
    return this.httpClient.post('api/public/register/new-user', payload).pipe(map(res => res));
  }

  reSendActivation(payload) {
    return this.httpClient.post('/api/public/register/resend-registration-confirmation', payload).pipe(map(res => res));
  }
}

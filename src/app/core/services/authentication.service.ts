import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import 'rxjs/add/operator/map';

import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME, TOKEN_NAME} from './auth.constants';

@Injectable()
export class AuthenticationService {
  static AUTH_TOKEN = '/oauth/token';

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string, grant_type: string) {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', grant_type);

    this.httpClient
      .post<Auth>('/oauth/token', body.toString(), {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD))
      })
      .subscribe(response => localStorage.setItem(TOKEN_NAME, response.access_token));
  }

  logout() {
    localStorage.removeItem(TOKEN_NAME);
    console.log('imhere');
  }
}

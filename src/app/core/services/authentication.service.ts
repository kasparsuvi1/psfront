import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import * as decode from 'jwt-decode';
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME, TOKEN_NAME} from './auth.constants';
import {AccountModel} from '../models/account.models';

@Injectable()
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  login(payload) {
    const body = new HttpParams()
      .set('username', payload.username)
      .set('password', payload.password)
      .set('grant_type', payload.grant_type);

    return this.httpClient
      .post<Auth>('/oauth/token', body.toString(), {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD))
      })
      .pipe(map(res => res.access_token), catchError(error => of(error)));
  }

  whoAmI(id): Observable<User> {
    return this.httpClient.get(`/api/private/user/${id}`).pipe(map(res => res as User));
  }

  getToken(): string {
    const account = JSON.parse(localStorage.getItem('account'));
    return account.access_token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.getToken();
    }
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }
}

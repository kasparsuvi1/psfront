import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map, catchError} from 'rxjs/operators';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import * as decode from 'jwt-decode';
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME, TOKEN_NAME} from './auth.constants';
import {AccountModel} from '../models/account.models';
import {of} from 'rxjs/observable/of';

@Injectable()
export class AuthenticationService {
  static AUTH_TOKEN = '/oauth/token';

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
}

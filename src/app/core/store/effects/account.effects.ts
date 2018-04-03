import {AuthenticationService} from '../../services/authentication.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Effect, Actions} from '@ngrx/effects';

import * as fromAccount from '../actions/account.actions';

import {Go} from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import * as decode from 'jwt-decode';
import {AccountModel} from '../../models/account.models';
import {MessagesService, messages} from '../../services/messages.service';

@Injectable()
export class AccountEffects {
  constructor(private actions$: Actions, private authenticationService: AuthenticationService, private messagesService: MessagesService) {}

  @Effect()
  Login: Observable<fromAccount.All> = this.actions$.ofType(fromAccount.LOGIN).pipe(
    switchMap((action: fromAccount.Login) => {
      return this.authenticationService.login(action.payload).pipe(
        map(access_token => {
          // Open access token and send the object to loginSuccess
          const tokenPayload = decode(access_token);
          const account: AccountModel = {
            authenticated: true,
            access_token: access_token,
            user_name: tokenPayload.user_name,
            roles: tokenPayload.authorities
          };
          return new fromAccount.LoginSuccess(account);
        }),
        catchError(error => of(new fromAccount.LoginFail(error)))
      );
    })
  );

  @Effect()
  logout = this.actions$.ofType(fromAccount.LOGOUT).pipe(
    map((action: fromAccount.Logout) => {
      localStorage.clear();
      return new Go({path: ['/home']});
    })
  );

  @Effect()
  LoginSuccess = this.actions$.ofType(fromAccount.LOGIN_SUCCESS).pipe(
    map((data: any) => {
      return new Go({path: ['/dashboard']});
    })
  );

  @Effect()
  LoginFail = this.actions$.ofType(fromAccount.LOGIN_FAIL).pipe(
    map((action: fromAccount.LoginFail) => {
      if (action.payload) {
        this.messagesService.warn(action.payload);
      }

      return new Go({path: ['/login']});
    })
  );
}

import {AuthenticationService} from '../../services/authentication.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Effect, Actions} from '@ngrx/effects';

import * as fromAccount from '../actions/account.actions';

import {Go} from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class AccountEffects {
  constructor(private actions$: Actions, private authenticationService: AuthenticationService) {}

  @Effect()
  Login: Observable<fromAccount.All> = this.actions$.ofType(fromAccount.LOGIN).pipe(
    switchMap((action: fromAccount.Login) => {
      return this.authenticationService
        .login(action.payload)
        .pipe(
          map(access_token => new fromAccount.LoginSuccess({access_token, authenticated: true})),
          catchError(error => of(new fromAccount.LoginFail(error)))
        );
    })
  );

  @Effect()
  logout: Observable<fromAccount.All> = this.actions$.ofType(fromAccount.LOGOUT).pipe(
    map((action: fromAccount.Logout) => {
      return new fromAccount.LoginFail();
    })
  );

  @Effect()
  LoginSuccess = this.actions$.ofType(fromAccount.LOGIN_SUCCESS).pipe(
    map((data: any) => {
      return new Go({path: ['/dashboard']});
    })
  );

  @Effect() LoginFail = this.actions$.ofType(fromAccount.LOGIN_FAIL).pipe(map(() => new Go({path: ['/login']})));
}

import {Action} from '@ngrx/store';
import {AccountModel} from '../../models/account.models';

export const LOGIN = '[Account] Login Attempt';
export const LOGIN_FAIL = '[Account] Authenticated';
export const LOGIN_SUCCESS = '[Account] Not Authenticated';
export const LOGOUT = '[Account] Logout';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payload?: any) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: any) {
    localStorage.setItem('access_token', payload.access_token);
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor() {
    localStorage.removeItem('access_token');
  }
}

export type All = Login | Logout | LoginSuccess | LoginFail;

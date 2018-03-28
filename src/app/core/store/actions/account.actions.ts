import {Action} from '@ngrx/store';
import {AccountModel} from '../../models/account.models';

export const LOGIN = '[Account] Login Attempt';
export const LOGIN_FAIL = '[Account] Not Authenticated';
export const LOGIN_SUCCESS = '[Account] Authenticated';
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

  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('account');
  }
}

export type All = Login | Logout | LoginSuccess | LoginFail;

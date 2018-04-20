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

  constructor(public payload: AccountModel) {
    localStorage.setItem('account', JSON.stringify(payload));
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor() {}
}

export const WHOAMI = '[Account] Who Am i';
export const WHOAMI_FAIL = '[Account] Who Am i fail';
export const WHOAMI_SUCCESS = '[Account] Who Am i success';

export class WhoAmI implements Action {
  readonly type = WHOAMI;

  constructor(public payload: number) {}
}

export class WhoAmIFail implements Action {
  readonly type = WHOAMI_FAIL;

  constructor(public payload?: any) {}
}

export class WhoAmISuccess implements Action {
  readonly type = WHOAMI_SUCCESS;

  constructor(public payload: User) {
    localStorage.setItem('user', JSON.stringify(payload));
  }
}

export type All = Login | LoginFail | LoginSuccess | Logout | WhoAmI | WhoAmIFail | WhoAmISuccess;

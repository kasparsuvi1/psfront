import {Action} from '@ngrx/store';

export const GET_USER = '[USER] Get user ';
export const GET_USER_FAIL = '[USER] Get user Fail';
export const GET_USER_SUCCESS = '[USER] Get user Success';

export class GetUser implements Action {
  readonly type = GET_USER;

  constructor(public payload?: number) {}
}

export class GetUserFail implements Action {
  readonly type = GET_USER_FAIL;

  constructor(public payload?: any) {}
}

export class GetUserSuccess implements Action {
  readonly type = GET_USER_SUCCESS;

  constructor(public payload: User) {}
}

export const DELETE_USER = '[USER] Delete user ';
export const DELETE_USER_FAIL = '[USER] Delete user Fail';
export const DELETE_USER_SUCCESS = '[USER] Delete user Success';

export class DeleteUser implements Action {
  readonly type = DELETE_USER;

  constructor(public payload?: number) {}
}

export class DeleteUserFail implements Action {
  readonly type = DELETE_USER_FAIL;

  constructor(public payload?: any) {}
}

export class DeleteUserSuccess implements Action {
  readonly type = DELETE_USER_SUCCESS;

  constructor(public payload: User) {}
}

export const UPDATE_USER = '[USER] Update user ';
export const UPDATE_USER_FAIL = '[USER] Update user Fail';
export const UPDATE_USER_SUCCESS = '[USER] Update user Success';

export class UpdateUser implements Action {
  readonly type = UPDATE_USER;

  constructor(public payload?: User) {}
}

export class UpdateUserFail implements Action {
  readonly type = UPDATE_USER_FAIL;

  constructor(public payload?: any) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = UPDATE_USER_SUCCESS;

  constructor(public payload: User) {
    localStorage.setItem('user', JSON.stringify(payload));
  }
}

export const CHANGE_PASSWORD = '[USER] Change password ';
export const CHANGE_PASSWORD_FAIL = '[USER] Change password Fail';
export const CHANGE_PASSWORD_SUCCESS = '[USER] Change password Success';

export class ChangePassword implements Action {
  readonly type = CHANGE_PASSWORD;

  constructor(public payload?: string) {}
}

export class ChangePasswordFail implements Action {
  readonly type = CHANGE_PASSWORD_FAIL;

  constructor(public payload?: any) {}
}

export class ChangePasswordSuccess implements Action {
  readonly type = CHANGE_PASSWORD_SUCCESS;

  constructor(public payload: User) {}
}

export type UserActions =
  | GetUser
  | GetUserFail
  | GetUserSuccess
  | DeleteUser
  | DeleteUserFail
  | DeleteUserSuccess
  | UpdateUser
  | UpdateUserFail
  | UpdateUserSuccess
  | ChangePassword
  | ChangePasswordFail
  | ChangePasswordSuccess;

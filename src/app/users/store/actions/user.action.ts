import {Action} from '@ngrx/store';

export const LOAD_USERS = '[Users] Load Users';
export const LOAD_USERS_FAIL = '[Users] Load Users Fail';
export const LOAD_USERS_SUCCESS = '[Users] Load Users Success';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;

  constructor(public payload: any) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;

  constructor(public payload: User[]) {}
}

export const CREATE_USER = '[Users] Create Users';
export const CREATE_USER_FAIL = '[Users] Create Users Fail';
export const CREATE_USER_SUCCESS = '[Users] Create Users Success';

export class CreateUser implements Action {
  readonly type = CREATE_USER;

  constructor(public payload: User) {}
}

export class CreateUserFail implements Action {
  readonly type = CREATE_USER_FAIL;

  constructor(public payload: any) {}
}

export class CreateUserSuccess implements Action {
  readonly type = CREATE_USER_SUCCESS;

  constructor(public payload: User) {}
}

export const UPDATE_USER = '[Users] Update Users';
export const UPDATE_USER_FAIL = '[Users] Update Users Fail';
export const UPDATE_USER_SUCCESS = '[Users] Update Users Success';

export class UpdateUser implements Action {
  readonly type = UPDATE_USER;

  constructor(public payload: User) {}
}

export class UpdateUserFail implements Action {
  readonly type = UPDATE_USER_FAIL;

  constructor(public payload: any) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = UPDATE_USER_SUCCESS;

  constructor(public payload: User) {}
}

export const DELETE_USER = '[Users] Delete User';
export const DELETE_USER_FAIL = '[Users] Delete User Fail';
export const DELETE_USER_SUCCESS = '[Users] Delete User Success';

export class DeleteUser implements Action {
  readonly type = DELETE_USER;

  constructor(public payload: User) {}
}

export class DeleteUserFail implements Action {
  readonly type = DELETE_USER_FAIL;

  constructor(public payload: any) {}
}

export class DeleteUserSuccess implements Action {
  readonly type = DELETE_USER_SUCCESS;

  constructor(public payload: User) {}
}

export type UserAction =
  | LoadUsers
  | LoadUsersFail
  | LoadUsersSuccess
  | CreateUser
  | CreateUserFail
  | CreateUserSuccess
  | UpdateUser
  | UpdateUserFail
  | UpdateUserSuccess
  | DeleteUser
  | DeleteUserFail
  | DeleteUserSuccess;

import {Action} from '@ngrx/store';

export const GET_USERS = '[ADMIN] Get users ';
export const GET_USERS_FAIL = '[ADMIN] Get users Fail';
export const GET_USERS_SUCCESS = '[ADMIN] Get users Success';

export class GetUsers implements Action {
  readonly type = GET_USERS;

  constructor() {}
}

export class GetUsersFail implements Action {
  readonly type = GET_USERS_FAIL;

  constructor(public payload?: any) {}
}

export class GetUsersSuccess implements Action {
  readonly type = GET_USERS_SUCCESS;

  constructor(public payload: User[]) {}
}

export type UsersActions = GetUsers | GetUsersFail | GetUsersSuccess;

import {Action} from '@ngrx/store';

export const GET_RESTOS = '[Resto] Get restos ';
export const GET_RESTOS_FAIL = '[Resto] Get restos Fail';
export const GET_RESTOS_SUCCESS = '[Resto] Get restos Success';

export class GetRestos implements Action {
  readonly type = GET_RESTOS;

  constructor() {}
}

export class GetRestosFail implements Action {
  readonly type = GET_RESTOS_FAIL;

  constructor(public payload?: any) {}
}

export class GetRestosSuccess implements Action {
  readonly type = GET_RESTOS_SUCCESS;

  constructor(public payload: Resto[]) {}
}

export const ADD_RESTO = '[RESTO] Add resto ';
export const ADD_RESTO_FAIL = '[RESTO] Add resto Fail';
export const ADD_RESTO_SUCCESS = '[RESTO] Add resto Success';

export class AddResto implements Action {
  readonly type = ADD_RESTO;

  constructor(public payload: Resto) {}
}

export class AddRestoFail implements Action {
  readonly type = ADD_RESTO_FAIL;

  constructor(public payload?: any) {}
}

export class AddRestoSuccess implements Action {
  readonly type = ADD_RESTO_SUCCESS;

  constructor(public payload: Resto) {}
}

export const DELETE_RESTO = '[RESTO] Delete resto ';
export const DELETE_RESTO_FAIL = '[RESTO] Delete resto Fail';
export const DELETE_RESTO_SUCCESS = '[RESTO] Delete resto Success';

export class DeleteResto implements Action {
  readonly type = DELETE_RESTO;

  constructor(public payload: number) {}
}

export class DeleteRestoFail implements Action {
  readonly type = DELETE_RESTO_FAIL;

  constructor(public payload?: any) {}
}

export class DeleteRestoSuccess implements Action {
  readonly type = DELETE_RESTO_SUCCESS;

  constructor(public payload: Resto) {}
}

export const UPDATE_RESTO = '[RESTO] Update resto ';
export const UPDATE_RESTO_FAIL = '[RESTO] Update resto Fail';
export const UPDATE_RESTO_SUCCESS = '[RESTO] Update resto Success';

export class UpdateResto implements Action {
  readonly type = UPDATE_RESTO;

  constructor(public payload: Resto) {}
}

export class UpdateRestoFail implements Action {
  readonly type = UPDATE_RESTO_FAIL;

  constructor(public payload?: any) {}
}

export class UpdateRestoSuccess implements Action {
  readonly type = UPDATE_RESTO_SUCCESS;

  constructor(public payload: Resto) {}
}

export type RestosActions =
  | GetRestos
  | GetRestosFail
  | GetRestosSuccess
  | AddResto
  | AddRestoFail
  | AddRestoSuccess
  | DeleteResto
  | DeleteRestoFail
  | DeleteRestoSuccess
  | UpdateResto
  | UpdateRestoFail
  | UpdateRestoSuccess;

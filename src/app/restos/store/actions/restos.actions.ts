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

export type RestosActions = GetRestos | GetRestosFail | GetRestosSuccess;

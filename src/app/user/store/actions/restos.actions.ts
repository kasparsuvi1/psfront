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

export const SET_RESTO_FILTER = '[RESTO] Set filter';

export class SetRestoFilter implements Action {
  readonly type = SET_RESTO_FILTER;

  constructor(public payload: number) {}
}
export type RestosActions = GetRestos | GetRestosFail | GetRestosSuccess | SetRestoFilter;

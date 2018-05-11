import {Action} from '@ngrx/store';

export const GET_ADVERTS = '[ADVERTS] Get adverts ';
export const GET_ADVERTS_FAIL = '[ADVERTS] Get adverts Fail';
export const GET_ADVERTS_SUCCESS = '[ADVERTS] Get adverts Success';

export class GetAdverts implements Action {
  readonly type = GET_ADVERTS;

  constructor() {}
}

export class GetAdvertsFail implements Action {
  readonly type = GET_ADVERTS_FAIL;

  constructor(public payload?: any) {}
}

export class GetAdvertsSuccess implements Action {
  readonly type = GET_ADVERTS_SUCCESS;

  constructor(public payload: Advert[]) {}
}

export const SET_ADVERT_FILTER = '[ADVERTS] Set filter';

export class SetAdvertFilter implements Action {
  readonly type = SET_ADVERT_FILTER;

  constructor(public payload: {hotel?: number}) {}
}

export type AdvertsActions = GetAdverts | GetAdvertsFail | GetAdvertsSuccess | SetAdvertFilter;

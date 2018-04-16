import {Action} from '@ngrx/store';

export const GET_HOTELS = '[HOTEL] Get hotels ';
export const GET_HOTELS_FAIL = '[HOTEL] Get hotels Fail';
export const GET_HOTELS_SUCCESS = '[HOTEL] Get hotels Success';

export class GetHotels implements Action {
  readonly type = GET_HOTELS;

  constructor() {}
}

export class GetHotelsFail implements Action {
  readonly type = GET_HOTELS_FAIL;

  constructor(public payload?: any) {}
}

export class GetHotelsSuccess implements Action {
  readonly type = GET_HOTELS_SUCCESS;

  constructor(public payload: Hotel[]) {}
}

export type HotelsActions = GetHotels | GetHotelsFail | GetHotelsSuccess;

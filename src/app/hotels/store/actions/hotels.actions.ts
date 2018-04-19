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

export const ADD_HOTEL = '[HOTEL] Add hotel ';
export const ADD_HOTEL_FAIL = '[HOTEL] Add hotel Fail';
export const ADD_HOTEL_SUCCESS = '[HOTEL] Add hotel Success';

export class AddHotel implements Action {
  readonly type = ADD_HOTEL;

  constructor(public payload: Hotel) {}
}

export class AddHotelFail implements Action {
  readonly type = ADD_HOTEL_FAIL;

  constructor(public payload?: any) {}
}

export class AddHotelSuccess implements Action {
  readonly type = ADD_HOTEL_SUCCESS;

  constructor(public payload: Hotel) {}
}

export const DELETE_HOTEL = '[HOTEL] Delete hotel ';
export const DELETE_HOTEL_FAIL = '[HOTEL] Delete hotel Fail';
export const DELETE_HOTEL_SUCCESS = '[HOTEL] Delete hotel Success';

export class DeleteHotel implements Action {
  readonly type = DELETE_HOTEL;

  constructor(public payload: number) {}
}

export class DeleteHotelFail implements Action {
  readonly type = DELETE_HOTEL_FAIL;

  constructor(public payload?: any) {}
}

export class DeleteHotelSuccess implements Action {
  readonly type = DELETE_HOTEL_SUCCESS;

  constructor(public payload: Hotel) {}
}

export const UPDATE_HOTEL = '[HOTEL] Update hotel ';
export const UPDATE_HOTEL_FAIL = '[HOTEL] Update hotel Fail';
export const UPDATE_HOTEL_SUCCESS = '[HOTEL] Update hotel Success';

export class UpdateHotel implements Action {
  readonly type = UPDATE_HOTEL;

  constructor(public payload: Hotel) {}
}

export class UpdateHotelFail implements Action {
  readonly type = UPDATE_HOTEL_FAIL;

  constructor(public payload?: any) {}
}

export class UpdateHotelSuccess implements Action {
  readonly type = UPDATE_HOTEL_SUCCESS;

  constructor(public payload: Hotel) {}
}

export type HotelsActions =
  | GetHotels
  | GetHotelsFail
  | GetHotelsSuccess
  | AddHotel
  | AddHotelFail
  | AddHotelSuccess
  | DeleteHotel
  | DeleteHotelFail
  | DeleteHotelSuccess
  | UpdateHotel
  | UpdateHotelFail
  | UpdateHotelSuccess;

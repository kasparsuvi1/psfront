import {Action} from '@ngrx/store';

export const GET_DEGREES = '[GLOBAL] Get degrees ';
export const GET_DEGREES_FAIL = '[GLOBAL] Get degrees Fail';
export const GET_DEGREES_SUCCESS = '[GLOBAL] Get degrees Success';

export class GetDegrees implements Action {
  readonly type = GET_DEGREES;

  constructor() {}
}

export class GetDegreesFail implements Action {
  readonly type = GET_DEGREES_FAIL;

  constructor(public payload?: any) {}
}

export class GetDegreesSuccess implements Action {
  readonly type = GET_DEGREES_SUCCESS;

  constructor(public payload: Degree[]) {}
}

export type DegreesActions = GetDegrees | GetDegreesFail | GetDegreesSuccess;

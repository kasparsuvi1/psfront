import {Action} from '@ngrx/store';

export const GET_DEGREES = '[DEGREE] Get degrees ';
export const GET_DEGREES_FAIL = '[DEGREE] Get degrees Fail';
export const GET_DEGREES_SUCCESS = '[DEGREE] Get degrees Success';

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

export const ADD_DEGREE = '[DEGREE] Add degree ';
export const ADD_DEGREE_FAIL = '[DEGREE] Add degree Fail';
export const ADD_DEGREE_SUCCESS = '[DEGREE] Add degree Success';

export class AddDegree implements Action {
  readonly type = ADD_DEGREE;

  constructor(public payload: Degree) {}
}

export class AddDegreeFail implements Action {
  readonly type = ADD_DEGREE_FAIL;

  constructor(public payload?: any) {}
}

export class AddDegreeSuccess implements Action {
  readonly type = ADD_DEGREE_SUCCESS;

  constructor(public payload: Degree) {}
}

export const DELETE_DEGREE = '[DEGREE] Delete degree ';
export const DELETE_DEGREE_FAIL = '[DEGREE] Delete degree Fail';
export const DELETE_DEGREE_SUCCESS = '[DEGREE] Delete degree Success';

export class DeleteDegree implements Action {
  readonly type = DELETE_DEGREE;

  constructor(public payload: number) {}
}

export class DeleteDegreeFail implements Action {
  readonly type = DELETE_DEGREE_FAIL;

  constructor(public payload?: any) {}
}

export class DeleteDegreeSuccess implements Action {
  readonly type = DELETE_DEGREE_SUCCESS;

  constructor(public payload: Degree) {}
}

export type DegreesActions =
  | GetDegrees
  | GetDegreesFail
  | GetDegreesSuccess
  | AddDegree
  | AddDegreeFail
  | AddDegreeSuccess
  | DeleteDegree
  | DeleteDegreeFail
  | DeleteDegreeSuccess;

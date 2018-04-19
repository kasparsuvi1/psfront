import {Action} from '@ngrx/store';

export const GET_OCCUPATIONS = '[OCCUPATION] Get occupations ';
export const GET_OCCUPATIONS_FAIL = '[OCCUPATION] Get occupations Fail';
export const GET_OCCUPATIONS_SUCCESS = '[OCCUPATION] Get occupations Success';

export class GetOccupations implements Action {
  readonly type = GET_OCCUPATIONS;

  constructor() {}
}

export class GetOccupationsFail implements Action {
  readonly type = GET_OCCUPATIONS_FAIL;

  constructor(public payload?: any) {}
}

export class GetOccupationsSuccess implements Action {
  readonly type = GET_OCCUPATIONS_SUCCESS;

  constructor(public payload: Occupation[]) {}
}

export const ADD_OCCUPATION = '[OCCUPATION] Add occcupation ';
export const ADD_OCCUPATION_FAIL = '[OCCUPATION] Add occcupation Fail';
export const ADD_OCCUPATION_SUCCESS = '[OCCUPATION] Add occcupation Success';

export class AddOccupation implements Action {
  readonly type = ADD_OCCUPATION;

  constructor(public payload: Occupation) {}
}

export class AddOccupationFail implements Action {
  readonly type = ADD_OCCUPATION_FAIL;

  constructor(public payload?: any) {}
}

export class AddOccupationSuccess implements Action {
  readonly type = ADD_OCCUPATION_SUCCESS;

  constructor(public payload: Occupation) {}
}

export const DELETE_OCCUPATION = '[OCCUPATION] Delete occcupation ';
export const DELETE_OCCUPATION_FAIL = '[OCCUPATION] Delete occcupation Fail';
export const DELETE_OCCUPATION_SUCCESS = '[OCCUPATION] Delete occcupation Success';

export class DeleteOccupation implements Action {
  readonly type = DELETE_OCCUPATION;

  constructor(public payload: number) {}
}

export class DeleteOccupationFail implements Action {
  readonly type = DELETE_OCCUPATION_FAIL;

  constructor(public payload?: any) {}
}

export class DeleteOccupationSuccess implements Action {
  readonly type = DELETE_OCCUPATION_SUCCESS;

  constructor(public payload: Occupation) {}
}

export const UPDATE_OCCUPATION = '[OCCUPATION] Update occupation ';
export const UPDATE_OCCUPATION_FAIL = '[OCCUPATION] Update occupation Fail';
export const UPDATE_OCCUPATION_SUCCESS = '[OCCUPATION] Update occupation Success';

export class UpdateOccupation implements Action {
  readonly type = UPDATE_OCCUPATION;

  constructor(public payload: Occupation) {}
}

export class UpdateOccupationFail implements Action {
  readonly type = UPDATE_OCCUPATION_FAIL;

  constructor(public payload?: any) {}
}

export class UpdateOccupationSuccess implements Action {
  readonly type = UPDATE_OCCUPATION_SUCCESS;

  constructor(public payload: Occupation) {}
}

export type OccupationsActions =
  | GetOccupations
  | GetOccupationsFail
  | GetOccupationsSuccess
  | AddOccupation
  | AddOccupationFail
  | AddOccupationSuccess
  | DeleteOccupation
  | DeleteOccupationFail
  | DeleteOccupationSuccess
  | UpdateOccupation
  | UpdateOccupationFail
  | UpdateOccupationSuccess;

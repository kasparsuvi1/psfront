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

export type OccupationsActions = GetOccupations | GetOccupationsFail | GetOccupationsSuccess;

import {Action} from '@ngrx/store';

export const ADD_RESPONSE = '[ADVERTS] Add Response ';
export const ADD_RESPONSE_FAIL = '[ADVERTS] Add Response Fail';
export const ADD_RESPONSE_SUCCESS = '[ADVERTS] Add Response Success';

export class AddResponse implements Action {
  readonly type = ADD_RESPONSE;

  constructor(public payload?: any) {}
}

export class AddResponseFail implements Action {
  readonly type = ADD_RESPONSE_FAIL;

  constructor(public payload?: any) {}
}

export class AddResponseSuccess implements Action {
  readonly type = ADD_RESPONSE_SUCCESS;

  constructor(public payload: Response) {}
}

export type ResponsesActions = AddResponse | AddResponseFail | AddResponseSuccess;

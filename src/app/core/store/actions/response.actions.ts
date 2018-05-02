import {Action} from '@ngrx/store';

export const GET_USER_RESPONSES = '[RESPONSES] Get responses ';
export const GET_USER_RESPONSES_FAIL = '[RESPONSES] Get responses Fail';
export const GET_USER_RESPONSES_SUCCESS = '[RESPONSES] Get responses Success';

export class GetUserResponses implements Action {
  readonly type = GET_USER_RESPONSES;

  constructor() {}
}

export class GetUserResponsesFail implements Action {
  readonly type = GET_USER_RESPONSES_FAIL;

  constructor(public payload?: any) {}
}

export class GetUserResponsesSuccess implements Action {
  readonly type = GET_USER_RESPONSES_SUCCESS;

  constructor(public payload: Response[]) {}
}

export const ADD_RESPONSE = '[RESPONSE] Add response ';
export const ADD_RESPONSE_FAIL = '[RESPONSE] Add response Fail';
export const ADD_RESPONSE_SUCCESS = '[RESPONSE] Add response Success';

export class AddResponse implements Action {
  readonly type = ADD_RESPONSE;

  constructor(public payload: Response) {}
}

export class AddResponseFail implements Action {
  readonly type = ADD_RESPONSE_FAIL;

  constructor(public payload?: any) {}
}

export class AddResponseSuccess implements Action {
  readonly type = ADD_RESPONSE_SUCCESS;

  constructor(public payload: Response) {}
}

export const DELETE_RESPONSE = '[RESPONSE] Delete response ';
export const DELETE_RESPONSE_FAIL = '[RESPONSE] Delete response Fail';
export const DELETE_RESPONSE_SUCCESS = '[RESPONSE] Delete response Success';

export class DeleteResponse implements Action {
  readonly type = DELETE_RESPONSE;

  constructor(public payload: number) {}
}

export class DeleteResponseFail implements Action {
  readonly type = DELETE_RESPONSE_FAIL;

  constructor(public payload?: any) {}
}

export class DeleteResponseSuccess implements Action {
  readonly type = DELETE_RESPONSE_SUCCESS;

  constructor(public payload: Response) {}
}

export const UPDATE_RESPONSE = '[RESPONSE] Update response ';
export const UPDATE_RESPONSE_FAIL = '[RESPONSE] Update response Fail';
export const UPDATE_RESPONSE_SUCCESS = '[RESPONSE] Update response Success';

export class UpdateResponse implements Action {
  readonly type = UPDATE_RESPONSE;

  constructor(public payload: Response) {}
}

export class UpdateResponseFail implements Action {
  readonly type = UPDATE_RESPONSE_FAIL;

  constructor(public payload?: any) {}
}

export class UpdateResponseSuccess implements Action {
  readonly type = UPDATE_RESPONSE_SUCCESS;

  constructor(public payload: Response) {}
}

export type ResponsesActions =
  | GetUserResponses
  | GetUserResponsesFail
  | GetUserResponsesSuccess
  | AddResponse
  | AddResponseFail
  | AddResponseSuccess
  | DeleteResponse
  | DeleteResponseFail
  | DeleteResponseSuccess
  | UpdateResponse
  | UpdateResponseFail
  | UpdateResponseSuccess;

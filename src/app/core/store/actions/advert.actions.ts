import {Action} from '@ngrx/store';

export const GET_USER_ADVERTS = '[USER-ADVERTS] Get User adverts ';
export const GET_USER_ADVERTS_FAIL = '[USER-ADVERTS] Get User adverts Fail';
export const GET_USER_ADVERTS_SUCCESS = '[USER-ADVERTS] Get User adverts Success';

export class GetUserAdverts implements Action {
  readonly type = GET_USER_ADVERTS;

  constructor() {}
}

export class GetUserAdvertsFail implements Action {
  readonly type = GET_USER_ADVERTS_FAIL;

  constructor(public payload?: any) {}
}

export class GetUserAdvertsSuccess implements Action {
  readonly type = GET_USER_ADVERTS_SUCCESS;

  constructor(public payload: Advert[]) {}
}

export const ADD_ADVERT = '[CORE-ADVERT] Add advert ';
export const ADD_ADVERT_FAIL = '[CORE-ADVERT] Add advert Fail';
export const ADD_ADVERT_SUCCESS = '[CORE-ADVERT] Add advert Success';

export class AddAdvert implements Action {
  readonly type = ADD_ADVERT;

  constructor(public payload: Advert) {}
}

export class AddAdvertFail implements Action {
  readonly type = ADD_ADVERT_FAIL;

  constructor(public payload?: any) {}
}

export class AddAdvertSuccess implements Action {
  readonly type = ADD_ADVERT_SUCCESS;

  constructor(public payload: Advert) {}
}

export const DELETE_ADVERT = '[CORE-ADVERT] Delete advert ';
export const DELETE_ADVERT_FAIL = '[CORE-ADVERT] Delete advert Fail';
export const DELETE_ADVERT_SUCCESS = '[CORE-ADVERT] Delete advert Success';

export class DeleteAdvert implements Action {
  readonly type = DELETE_ADVERT;

  constructor(public payload: number) {}
}

export class DeleteAdvertFail implements Action {
  readonly type = DELETE_ADVERT_FAIL;

  constructor(public payload?: any) {}
}

export class DeleteAdvertSuccess implements Action {
  readonly type = DELETE_ADVERT_SUCCESS;

  constructor(public payload: Advert) {}
}

export const UPDATE_ADVERT = '[CORE-ADVERT] Update advert ';
export const UPDATE_ADVERT_FAIL = '[CORE-ADVERT] Update advert Fail';
export const UPDATE_ADVERT_SUCCESS = '[CORE-ADVERT] Update advert Success';

export class UpdateAdvert implements Action {
  readonly type = UPDATE_ADVERT;

  constructor(public payload: Advert) {}
}

export class UpdateAdvertFail implements Action {
  readonly type = UPDATE_ADVERT_FAIL;

  constructor(public payload?: any) {}
}

export class UpdateAdvertSuccess implements Action {
  readonly type = UPDATE_ADVERT_SUCCESS;

  constructor(public payload: Advert) {}
}

export const ACCEPT_RESPONSE = '[RESPONSE] Accept response ';
export const ACCEPT_RESPONSE_FAIL = '[RESPONSE] Accept response Fail';
export const ACCEPT_RESPONSE_SUCCESS = '[RESPONSE] Accept response Success';

export class AcceptResponse implements Action {
  readonly type = ACCEPT_RESPONSE;

  constructor(public payload: {advertId: number; responseId: number}) {}
}

export class AcceptResponseFail implements Action {
  readonly type = ACCEPT_RESPONSE_FAIL;

  constructor(public payload?: any) {}
}

export class AcceptResponseSuccess implements Action {
  readonly type = ACCEPT_RESPONSE_SUCCESS;

  constructor(public payload: Response) {}
}

export const DECLINE_RESPONSE = '[RESPONSE] Decline response ';
export const DECLINE_RESPONSE_FAIL = '[RESPONSE] Decline response Fail';
export const DECLINE_RESPONSE_SUCCESS = '[RESPONSE] Decline response Success';

export class DeclineResponse implements Action {
  readonly type = DECLINE_RESPONSE;

  constructor(public payload: {advertId: number; responseId: number}) {}
}

export class DeclineResponseFail implements Action {
  readonly type = DECLINE_RESPONSE_FAIL;

  constructor(public payload?: any) {}
}

export class DeclineResponseSuccess implements Action {
  readonly type = DECLINE_RESPONSE_SUCCESS;

  constructor(public payload: Response) {}
}

export type AdvertsActions =
  | GetUserAdverts
  | GetUserAdvertsFail
  | GetUserAdvertsSuccess
  | AddAdvert
  | AddAdvertFail
  | AddAdvertSuccess
  | DeleteAdvert
  | DeleteAdvertFail
  | DeleteAdvertSuccess
  | UpdateAdvert
  | UpdateAdvertFail
  | UpdateAdvertSuccess
  | AcceptResponse
  | AcceptResponseFail
  | AcceptResponseSuccess
  | DeclineResponse
  | DeclineResponseFail
  | DeclineResponseSuccess;

import {Action} from '@ngrx/store';

export const CONFIRM_REGISTRATION = '[CONFIRM_REGISTRATION] Confirm registration ';
export const CONFIRM_REGISTRATION_FAIL = '[CONFIRM_REGISTRATION] Confirm registration Fail';
export const CONFIRM_REGISTRATION_SUCCESS = '[CONFIRM_REGISTRATION] Confirm registration Success';

export class ConfirmRegistration implements Action {
  readonly type = CONFIRM_REGISTRATION;

  constructor(public payload: string) {}
}

export class ConfirmRegistrationFail implements Action {
  readonly type = CONFIRM_REGISTRATION_FAIL;

  constructor(public payload?: any) {}
}

export class ConfirmRegistrationSuccess implements Action {
  readonly type = CONFIRM_REGISTRATION_SUCCESS;

  constructor(public payload: any) {}
}

export type ConfirmActions = ConfirmRegistration | ConfirmRegistrationFail | ConfirmRegistrationSuccess;

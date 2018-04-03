import {Action} from '@ngrx/store';

export const REGISTER = '[REGISTER] Register ';
export const REGISTER_FAIL = '[REGISTER] Register Fail';
export const REGISTER_SUCCESS = '[REGISTER] Register Success';

export class Register implements Action {
  readonly type = REGISTER;

  constructor(public payload: any) {}
}

export class RegisterFail implements Action {
  readonly type = REGISTER_FAIL;

  constructor(public payload?: any) {}
}

export class RegisterSuccess implements Action {
  readonly type = REGISTER_SUCCESS;

  constructor(public payload?: any) {}
}

export const RESEND_ACTIVATION = '[REGISTER] Resend activation ';
export const RESEND_ACTIVATION_FAIL = '[REGISTER] Resend activation Fail';
export const RESEND_ACTIVATION_SUCCESS = '[REGISTER] Resend activation Success';

export class ResendActivation implements Action {
  readonly type = RESEND_ACTIVATION;

  constructor(public payload: any) {}
}

export class ResendActivationFail implements Action {
  readonly type = RESEND_ACTIVATION_FAIL;

  constructor(public payload?: any) {}
}

export class ResendActivationSuccess implements Action {
  readonly type = RESEND_ACTIVATION_SUCCESS;

  constructor(public payload?: any) {}
}

export type RegisterActions = Register | RegisterFail | RegisterSuccess | ResendActivation | ResendActivationFail | ResendActivationSuccess;

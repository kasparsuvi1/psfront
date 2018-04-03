import {
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  RegisterActions,
  RESEND_ACTIVATION,
  RESEND_ACTIVATION_FAIL,
  RESEND_ACTIVATION_SUCCESS
} from '../actions/register.actions';

export interface RegisterState {
  loaded: boolean;
  loading: boolean;
}

export const initialState: RegisterState = {
  loaded: false,
  loading: false
};

export function registerReducer(state: RegisterState = initialState, action: RegisterActions): RegisterState {
  switch (action.type) {
    case REGISTER:
      return {...state, loading: true, loaded: false};
    case REGISTER_FAIL:
      return {...state, loading: false, loaded: true};
    case REGISTER_SUCCESS:
      return {...state, loading: false, loaded: true};
    case RESEND_ACTIVATION:
      return {...state, loading: true, loaded: false};
    case RESEND_ACTIVATION_FAIL:
      return {...state, loading: false, loaded: true};
    case RESEND_ACTIVATION_SUCCESS:
      return {...state, loading: false, loaded: true};
  }
  return state;
}

import {ConfirmActions, CONFIRM_REGISTRATION, CONFIRM_REGISTRATION_FAIL, CONFIRM_REGISTRATION_SUCCESS} from '../actions/confirm.actions';

export interface ConfirmState {
  loaded: boolean;
  loading: boolean;
}

export const initialState: ConfirmState = {
  loaded: false,
  loading: false
};

export function confirmReducer(state: ConfirmState = initialState, action: ConfirmActions): ConfirmState {
  switch (action.type) {
    case CONFIRM_REGISTRATION:
      return {...state, loading: true, loaded: false};
    case CONFIRM_REGISTRATION_FAIL:
      return {...state, loading: false, loaded: true};
    case CONFIRM_REGISTRATION_SUCCESS:
      return {...state, loading: false, loaded: true};
    default:
      return state;
  }
}

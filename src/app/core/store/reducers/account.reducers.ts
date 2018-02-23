import * as fromAccount from '../actions/account.actions';
import {AccountModel} from '../../models/account.models';
import * as decode from 'jwt-decode';

export interface AccountState {
  account: AccountModel;
  loaded: boolean;
  loading: boolean;
}

export const initialState: AccountState = {
  account: {
    authenticated: false,
    access_token: '',
    user_name: '',
    roles: []
  },
  loaded: false,
  loading: false
};

export function accountReducer(state: AccountState = initialState, action: fromAccount.All) {
  switch (action.type) {
    case fromAccount.LOGIN:
      return {...state, loading: true, loaded: false};
    case fromAccount.LOGIN_FAIL:
      return {...state, ...initialState, loading: false, loaded: true};
    case fromAccount.LOGIN_SUCCESS:
      const tokenPayload = decode(action.payload.access_token);
      const account: AccountModel = {
        authenticated: true,
        access_token: action.payload,
        user_name: tokenPayload.user_name,
        roles: tokenPayload.authorities
      };
      return {...state, account: account, loading: false, loaded: true};
    case fromAccount.LOGOUT:
      return {...state, ...initialState, loading: true, loaded: false};
  }
  return state;
}

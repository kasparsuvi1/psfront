import * as fromAccount from '../actions/account.actions';
import {AccountModel} from '../../models/account.models';

export interface AccountState {
  account: AccountModel;
  user: User;
  loaded: boolean;
  loading: boolean;
}

const account = (JSON.parse(localStorage.getItem('account')) as AccountModel) || ({} as AccountModel);
const emptyAccount = {
  authenticated: false,
  access_token: '',
  userId: null,
  roles: []
};

export const initialState: AccountState = {
  account: {...emptyAccount, ...account},
  user: {} as User,
  loaded: false,
  loading: false
};

export function accountReducer(state: AccountState = initialState, action: fromAccount.All) {
  switch (action.type) {
    case fromAccount.LOGIN:
      return {...state, loading: true, loaded: false};
    case fromAccount.LOGIN_FAIL:
      return {...state, account: emptyAccount, loading: false, loaded: true};
    case fromAccount.LOGIN_SUCCESS:
      return {...state, account: action.payload, loading: false, loaded: true};
    case fromAccount.WHOAMI:
      return {...state, loading: true, loaded: false};
    case fromAccount.WHOAMI_FAIL:
      return {...state, user: {} as User, loading: false, loaded: true};
    case fromAccount.WHOAMI_SUCCESS:
      return {...state, user: action.payload, loading: false, loaded: true};
    case fromAccount.LOGOUT:
      return {...state, account: emptyAccount, loading: true, loaded: false};
  }
  return state;
}

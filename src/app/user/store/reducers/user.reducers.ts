import {
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  UserActions,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_SUCCESS
} from '../actions/user.actions';

export interface UserState {
  entity: User;
  loaded: boolean;
  loading: boolean;
}

export const initialState: UserState = {
  entity: {} as User,
  loaded: false,
  loading: false
};

export function userReducer(state: UserState = initialState, action: UserActions): UserState {
  switch (action.type) {
    case GET_USER:
      return {...state, loading: true, loaded: false};
    case GET_USER_FAIL:
      return {...state, loading: false, loaded: true};
    case GET_USER_SUCCESS:
      const entity = action.payload;
      return {...state, entity, loading: false, loaded: true};
    case DELETE_USER:
      return {...state, loading: true, loaded: false};
    case DELETE_USER_FAIL:
      return {...state, loading: false, loaded: true};
    case DELETE_USER_SUCCESS:
      return {...state, loading: false, loaded: true};
    case CHANGE_PASSWORD:
      return {...state, loading: true, loaded: false};
    case CHANGE_PASSWORD_FAIL:
      return {...state, loading: false, loaded: true};
    case CHANGE_PASSWORD_SUCCESS:
      return {...state, loading: false, loaded: true};
    case UPDATE_USER:
      return {...state, loading: true, loaded: false};
    case UPDATE_USER_FAIL:
      return {...state, loading: false, loaded: true};
    case UPDATE_USER_SUCCESS:
      const user = action.payload;
      return {...state, entity: user, loading: false, loaded: true};
    default:
      return state;
  }
}

import {GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS, UsersActions} from '../actions/users.actions';

export interface UsersState {
  entities: User[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: UsersState = {
  entities: [{} as User],
  loaded: false,
  loading: false
};

export function usersReducer(state: UsersState = initialState, action: UsersActions): UsersState {
  switch (action.type) {
    case GET_USERS:
      return {...state, loading: true, loaded: false};
    case GET_USERS_FAIL:
      return {...state, loading: false, loaded: true};
    case GET_USERS_SUCCESS:
      return {...state, entities: action.payload, loading: false, loaded: true};
  }
  return state;
}

import {
  CREATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  UserAction,
  LOAD_USERS,
  LOAD_USERS_FAIL,
  LOAD_USERS_SUCCESS,
  UPDATE_USER_SUCCESS
} from '../actions';

export interface UserState {
  entities: {[id: number]: User};
  loaded: boolean;
  loading: boolean;
}

export const initialState: UserState = {
  entities: {},
  loaded: false,
  loading: false
};

export function UserReducer(state = initialState, action: UserAction): UserState {
  switch (action.type) {
    case LOAD_USERS: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_USERS_SUCCESS: {
      const users = action.payload;
      const entities = users.reduce(
        (entity: {[id: number]: User}, item: User) => {
          return {
            ...entity,
            [item.id]: item
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
    case LOAD_USERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case UPDATE_USER_SUCCESS:
    case CREATE_USER_SUCCESS: {
      const item = action.payload;
      const entities = {
        ...state.entities,
        [item.id]: item
      };
      return {
        ...state,
        entities
      };
    }

    case DELETE_USER_SUCCESS: {
      const user = action.payload;
      const {[user.id]: removed, ...entities} = state.entities;
      return {
        ...state,
        entities
      };
    }
  }

  return state;
}

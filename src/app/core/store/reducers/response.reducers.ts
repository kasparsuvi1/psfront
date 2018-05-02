import {
  GET_USER_RESPONSES,
  GET_USER_RESPONSES_FAIL,
  GET_USER_RESPONSES_SUCCESS,
  ResponsesActions,
  ADD_RESPONSE,
  ADD_RESPONSE_FAIL,
  ADD_RESPONSE_SUCCESS,
  DELETE_RESPONSE,
  DELETE_RESPONSE_FAIL,
  DELETE_RESPONSE_SUCCESS,
  UPDATE_RESPONSE,
  UPDATE_RESPONSE_SUCCESS,
  UPDATE_RESPONSE_FAIL
} from '../actions/response.actions';

export interface ResponsesState {
  entities: {[id: number]: Response};
  loaded: boolean;
  loading: boolean;
}

export const initialState: ResponsesState = {
  entities: {},
  loaded: false,
  loading: false
};

export function responsesReducer(state: ResponsesState = initialState, action: ResponsesActions): ResponsesState {
  switch (action.type) {
    case GET_USER_RESPONSES:
      return {...state, loading: true, loaded: false};
    case GET_USER_RESPONSES_FAIL:
      return {...state, loading: false, loaded: true};
    case GET_USER_RESPONSES_SUCCESS:
      const responses = action.payload;
      const entities = responses.reduce((entity: {[id: number]: Response}, item: Response) => {
        return {...entity, [item.id]: item};
      }, {});

      return {...state, entities, loading: false, loaded: true};
    case ADD_RESPONSE:
      return {...state, loading: true, loaded: false};
    case ADD_RESPONSE_FAIL:
      return {...state, loading: false, loaded: true};
    case ADD_RESPONSE_SUCCESS:
      return {...state, loading: false, loaded: true};
    case DELETE_RESPONSE:
      return {...state, loading: true, loaded: false};
    case DELETE_RESPONSE_FAIL:
      return {...state, loading: false, loaded: true};
    case DELETE_RESPONSE_SUCCESS:
      return {...state, loading: false, loaded: true};
    case UPDATE_RESPONSE:
      return {...state, loading: true, loaded: false};
    case UPDATE_RESPONSE_FAIL:
      return {...state, loading: false, loaded: true};
    case UPDATE_RESPONSE_SUCCESS:
      return {...state, loading: false, loaded: true};

    default:
      return state;
  }
}

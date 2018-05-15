import {ADD_RESPONSE, ADD_RESPONSE_FAIL, ADD_RESPONSE_SUCCESS, ResponsesActions} from '../actions/responses.actions';

export interface ResponsesState {
  loaded: boolean;
  loading: boolean;
}

export const initialState: ResponsesState = {
  loaded: false,
  loading: false
};

export function responsesReducer(state: ResponsesState = initialState, action: ResponsesActions): ResponsesState {
  switch (action.type) {
    case ADD_RESPONSE:
      return {...state, loading: true, loaded: false};
    case ADD_RESPONSE_FAIL:
      return {...state, loading: false, loaded: true};
    case ADD_RESPONSE_SUCCESS:
      return {...state, loading: false, loaded: true};
    default:
      return state;
  }
}

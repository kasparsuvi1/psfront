import {
  GET_RESTOS,
  GET_RESTOS_FAIL,
  GET_RESTOS_SUCCESS,
  RestosActions,
  ADD_RESTO,
  ADD_RESTO_FAIL,
  ADD_RESTO_SUCCESS,
  DELETE_RESTO,
  DELETE_RESTO_FAIL,
  DELETE_RESTO_SUCCESS
} from '../actions/restos.actions';

export interface RestosState {
  entities: {[id: number]: Resto};
  loaded: boolean;
  loading: boolean;
}

export const initialState: RestosState = {
  entities: {},
  loaded: false,
  loading: false
};

export function restosReducer(state: RestosState = initialState, action: RestosActions): RestosState {
  switch (action.type) {
    case GET_RESTOS:
      return {...state, loading: true, loaded: false};
    case GET_RESTOS_FAIL:
      return {...state, loading: false, loaded: true};
    case GET_RESTOS_SUCCESS:
      const restos = action.payload;
      const entities = restos.reduce((entity: {[id: number]: Resto}, item: Resto) => {
        return {...entity, [item.id]: item};
      }, {});

      return {...state, entities, loading: false, loaded: true};
    case ADD_RESTO:
      return {...state, loading: true, loaded: false};
    case ADD_RESTO_FAIL:
      return {...state, loading: false, loaded: true};
    case ADD_RESTO_SUCCESS:
      return {...state, loading: false, loaded: true};
    case DELETE_RESTO:
      return {...state, loading: true, loaded: false};
    case DELETE_RESTO_FAIL:
      return {...state, loading: false, loaded: true};
    case DELETE_RESTO_SUCCESS:
      return {...state, loading: false, loaded: true};

    default:
      return state;
  }
}

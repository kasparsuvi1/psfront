import {GET_RESTOS, GET_RESTOS_FAIL, GET_RESTOS_SUCCESS, RestosActions, SET_RESTO_FILTER} from '../actions/restos.actions';

export interface RestosState {
  entities: {[id: number]: Resto};
  filters: number;
  loaded: boolean;
  loading: boolean;
}

export const initialState: RestosState = {
  entities: {},
  filters: null,
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
    case SET_RESTO_FILTER: {
      return {...state, filters: action.payload};
    }
    default:
      return state;
  }
}

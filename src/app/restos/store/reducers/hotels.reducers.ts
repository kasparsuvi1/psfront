import {GET_HOTELS, GET_HOTELS_FAIL, GET_HOTELS_SUCCESS, HotelsActions} from '../actions/hotels.actions';

export interface HotelsState {
  entities: {[id: number]: Hotel};
  loaded: boolean;
  loading: boolean;
}

export const initialState: HotelsState = {
  entities: {},
  loaded: false,
  loading: false
};

export function hotelsReducer(state: HotelsState = initialState, action: HotelsActions): HotelsState {
  switch (action.type) {
    case GET_HOTELS:
      return {...state, loading: true, loaded: false};
    case GET_HOTELS_FAIL:
      return {...state, loading: false, loaded: true};
    case GET_HOTELS_SUCCESS:
      const hotels = action.payload;
      const entities = hotels.reduce((entity: {[id: number]: Hotel}, item: Hotel) => {
        return {...entity, [item.id]: item};
      }, {});

      return {...state, entities, loading: false, loaded: true};
    default:
      return state;
  }
}

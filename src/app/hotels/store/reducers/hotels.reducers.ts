import {
  GET_HOTELS,
  GET_HOTELS_FAIL,
  GET_HOTELS_SUCCESS,
  HotelsActions,
  ADD_HOTEL,
  ADD_HOTEL_FAIL,
  ADD_HOTEL_SUCCESS,
  DELETE_HOTEL,
  DELETE_HOTEL_FAIL,
  DELETE_HOTEL_SUCCESS,
  UPDATE_HOTEL,
  UPDATE_HOTEL_SUCCESS,
  UPDATE_HOTEL_FAIL
} from '../actions/hotels.actions';

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
    case ADD_HOTEL:
      return {...state, loading: true, loaded: false};
    case ADD_HOTEL_FAIL:
      return {...state, loading: false, loaded: true};
    case ADD_HOTEL_SUCCESS:
      return {...state, loading: false, loaded: true};
    case DELETE_HOTEL:
      return {...state, loading: true, loaded: false};
    case DELETE_HOTEL_FAIL:
      return {...state, loading: false, loaded: true};
    case DELETE_HOTEL_SUCCESS:
      return {...state, loading: false, loaded: true};
    case UPDATE_HOTEL:
      return {...state, loading: true, loaded: false};
    case UPDATE_HOTEL_FAIL:
      return {...state, loading: false, loaded: true};
    case UPDATE_HOTEL_SUCCESS:
      return {...state, loading: false, loaded: true};

    default:
      return state;
  }
}

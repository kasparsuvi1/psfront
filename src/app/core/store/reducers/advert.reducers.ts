import {
  GET_USER_ADVERTS,
  GET_USER_ADVERTS_FAIL,
  GET_USER_ADVERTS_SUCCESS,
  AdvertsActions,
  ADD_ADVERT,
  ADD_ADVERT_FAIL,
  ADD_ADVERT_SUCCESS,
  DELETE_ADVERT,
  DELETE_ADVERT_FAIL,
  DELETE_ADVERT_SUCCESS,
  UPDATE_ADVERT,
  UPDATE_ADVERT_SUCCESS,
  UPDATE_ADVERT_FAIL,
  ACCEPT_RESPONSE,
  ACCEPT_RESPONSE_FAIL,
  ACCEPT_RESPONSE_SUCCESS,
  DECLINE_RESPONSE,
  DECLINE_RESPONSE_FAIL,
  DECLINE_RESPONSE_SUCCESS
} from '../actions/advert.actions';

export interface AdvertsState {
  entities: {[id: number]: Advert};
  loaded: boolean;
  loading: boolean;
}

export const initialState: AdvertsState = {
  entities: {},
  loaded: false,
  loading: false
};

export function advertsReducer(state: AdvertsState = initialState, action: AdvertsActions): AdvertsState {
  switch (action.type) {
    case GET_USER_ADVERTS:
      return {...state, loading: true, loaded: false};
    case GET_USER_ADVERTS_FAIL:
      return {...state, loading: false, loaded: true};
    case GET_USER_ADVERTS_SUCCESS:
      const adverts = action.payload;
      const entities = adverts.reduce((entity: {[id: number]: Advert}, item: Advert) => {
        return {...entity, [item.id]: item};
      }, {});

      return {...state, entities, loading: false, loaded: true};
    case ADD_ADVERT:
      return {...state, loading: true, loaded: false};
    case ADD_ADVERT_FAIL:
      return {...state, loading: false, loaded: true};
    case ADD_ADVERT_SUCCESS:
      return {...state, loading: false, loaded: true};
    case DELETE_ADVERT:
      return {...state, loading: true, loaded: false};
    case DELETE_ADVERT_FAIL:
      return {...state, loading: false, loaded: true};
    case DELETE_ADVERT_SUCCESS:
      return {...state, loading: false, loaded: true};
    case UPDATE_ADVERT:
      return {...state, loading: true, loaded: false};
    case UPDATE_ADVERT_FAIL:
      return {...state, loading: false, loaded: true};
    case UPDATE_ADVERT_SUCCESS:
      return {...state, loading: false, loaded: true};
    case ACCEPT_RESPONSE:
      return {...state, loading: true, loaded: false};
    case ACCEPT_RESPONSE_FAIL:
      return {...state, loading: false, loaded: true};
    case ACCEPT_RESPONSE_SUCCESS:
      return {...state, loading: false, loaded: true};
    case DECLINE_RESPONSE:
      return {...state, loading: true, loaded: false};
    case DECLINE_RESPONSE_FAIL:
      return {...state, loading: false, loaded: true};
    case DECLINE_RESPONSE_SUCCESS:
      return {...state, loading: false, loaded: true};

    default:
      return state;
  }
}

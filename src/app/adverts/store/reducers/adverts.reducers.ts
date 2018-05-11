import {GET_ADVERTS, GET_ADVERTS_FAIL, GET_ADVERTS_SUCCESS, AdvertsActions} from '../actions/adverts.actions';

export interface AdvertsState {
  entities: {[id: number]: Advert};
  filters: {
    hotel: number;
  };
  loaded: boolean;
  loading: boolean;
}

export const initialState: AdvertsState = {
  entities: {},
  filters: {
    hotel: null
  },
  loaded: false,
  loading: false
};

export function advertsReducer(state: AdvertsState = initialState, action: AdvertsActions): AdvertsState {
  switch (action.type) {
    case GET_ADVERTS:
      return {...state, loading: true, loaded: false};
    case GET_ADVERTS_FAIL:
      return {...state, loading: false, loaded: true};
    case GET_ADVERTS_SUCCESS:
      const adverts = action.payload;
      const entities = adverts.reduce((entity: {[id: number]: Advert}, item: Advert) => {
        return {...entity, [item.id]: item};
      }, {});

      return {...state, entities, loading: false, loaded: true};
    default:
      return state;
  }
}

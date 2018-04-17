import {
  GET_OCCUPATIONS,
  GET_OCCUPATIONS_FAIL,
  GET_OCCUPATIONS_SUCCESS,
  OccupationsActions,
  ADD_OCCUPATION,
  ADD_OCCUPATION_FAIL,
  ADD_OCCUPATION_SUCCESS,
  DELETE_OCCUPATION,
  DELETE_OCCUPATION_FAIL,
  DELETE_OCCUPATION_SUCCESS
} from '../actions/occupations.actions';

export interface OccupationsState {
  entities: {[id: number]: Occupation};
  loaded: boolean;
  loading: boolean;
}

export const initialState: OccupationsState = {
  entities: {},
  loaded: false,
  loading: false
};

export function occupationsReducer(state: OccupationsState = initialState, action: OccupationsActions): OccupationsState {
  switch (action.type) {
    case GET_OCCUPATIONS:
      return {...state, loading: true, loaded: false};
    case GET_OCCUPATIONS_FAIL:
      return {...state, loading: false, loaded: true};
    case GET_OCCUPATIONS_SUCCESS:
      const occupations = action.payload;
      const entities = occupations.reduce((entity: {[id: number]: Occupation}, item: Occupation) => {
        return {...entity, [item.id]: item};
      }, {});

      return {...state, entities, loading: false, loaded: true};
    case ADD_OCCUPATION:
      return {...state, loading: true, loaded: false};
    case ADD_OCCUPATION_FAIL:
      return {...state, loading: false, loaded: true};
    case ADD_OCCUPATION_SUCCESS:
      return {...state, loading: false, loaded: true};
    case DELETE_OCCUPATION:
      return {...state, loading: true, loaded: false};
    case DELETE_OCCUPATION_FAIL:
      return {...state, loading: false, loaded: true};
    case DELETE_OCCUPATION_SUCCESS:
      return {...state, loading: false, loaded: true};

    default:
      return state;
  }
}

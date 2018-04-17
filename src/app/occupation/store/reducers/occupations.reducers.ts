import {GET_OCCUPATIONS, GET_OCCUPATIONS_FAIL, GET_OCCUPATIONS_SUCCESS, OccupationsActions} from '../actions/occupations.actions';

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
      const entities = occupations.reduce(
        (entity: {[id: number]: Occupation}, item: Occupation) => {
          return {...entity, [item.id]: item};
        },
        {...state.entities}
      );

      return {...state, entities, loading: false, loaded: true};
    default:
      return state;
  }
}

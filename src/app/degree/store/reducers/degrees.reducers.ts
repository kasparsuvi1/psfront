import {GET_DEGREES, GET_DEGREES_FAIL, GET_DEGREES_SUCCESS, DegreesActions} from '../actions/degrees.actions';

export interface DegreesState {
  entities: {[id: number]: Degree};
  loaded: boolean;
  loading: boolean;
}

export const initialState: DegreesState = {
  entities: {},
  loaded: false,
  loading: false
};

export function degreesReducer(state: DegreesState = initialState, action: DegreesActions): DegreesState {
  switch (action.type) {
    case GET_DEGREES:
      return {...state, loading: true, loaded: false};
    case GET_DEGREES_FAIL:
      return {...state, loading: false, loaded: true};
    case GET_DEGREES_SUCCESS:
      const degrees = action.payload;
      const entities = degrees.reduce(
        (entity: {[id: number]: Degree}, item: Degree) => {
          return {...entity, [item.id]: item};
        },
        {...state.entities}
      );

      return {...state, entities, loading: false, loaded: true};
    default:
      return state;
  }
}

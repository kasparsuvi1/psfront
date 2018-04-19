import {
  GET_DEGREES,
  GET_DEGREES_FAIL,
  GET_DEGREES_SUCCESS,
  DegreesActions,
  ADD_DEGREE,
  ADD_DEGREE_FAIL,
  ADD_DEGREE_SUCCESS,
  DELETE_DEGREE,
  DELETE_DEGREE_FAIL,
  DELETE_DEGREE_SUCCESS,
  UPDATE_DEGREE,
  UPDATE_DEGREE_FAIL,
  UPDATE_DEGREE_SUCCESS
} from '../actions/degrees.actions';

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
      const entities = degrees.reduce((entity: {[id: number]: Degree}, item: Degree) => {
        return {...entity, [item.id]: item};
      }, {});

      return {...state, entities, loading: false, loaded: true};
    case ADD_DEGREE:
      return {...state, loading: true, loaded: false};
    case ADD_DEGREE_FAIL:
      return {...state, loading: false, loaded: true};
    case ADD_DEGREE_SUCCESS:
      const degree = action.payload;
      /*const newEntities = degrees.reduce(
        (entity: {[id: number]: Degree}, item: Degree) => {
          return {...entity, [item.id]: item};
        },
        {...state.entities}
      ); */
      return {...state, loading: false, loaded: true /*entities: newEntities */};
    case DELETE_DEGREE:
      return {...state, loading: true, loaded: false};
    case DELETE_DEGREE_FAIL:
      return {...state, loading: false, loaded: true};
    case DELETE_DEGREE_SUCCESS:
      return {...state, loading: false, loaded: true};
    case UPDATE_DEGREE:
      return {...state, loading: true, loaded: false};
    case UPDATE_DEGREE_FAIL:
      return {...state, loading: false, loaded: true};
    case UPDATE_DEGREE_SUCCESS:
      return {...state, loading: false, loaded: true};

    default:
      return state;
  }
}

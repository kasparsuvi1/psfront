import {Store, createSelector, createFeatureSelector} from '@ngrx/store';
import {ResponsesState} from '../reducers/response.reducers';

export const getUserResponsesState = createFeatureSelector<ResponsesState>('userResponses');

export const getUserResponsesData = createSelector(getUserResponsesState, (state: ResponsesState) => state.entities);

/*
* Get all entities and parse them
*/
export const getUserResponses = createSelector(getUserResponsesData, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

import {Store, createSelector, createFeatureSelector} from '@ngrx/store';
import {DegreesState} from '../reducers/degrees.reducers';

export const getDegreeState = createFeatureSelector<DegreesState>('degrees');

export const getDegreeData = createSelector(getDegreeState, (state: DegreesState) => state.entities);

/*
* Get all entities and parse them
*/
export const getDegrees = createSelector(getDegreeData, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

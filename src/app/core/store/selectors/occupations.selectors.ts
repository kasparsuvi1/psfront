import {Store, createSelector, createFeatureSelector} from '@ngrx/store';
import {OccupationsState} from '../reducers/occupations.reducers';

export const getOccupationState = createFeatureSelector<OccupationsState>('occupations');

export const getOccupationData = createSelector(getOccupationState, (state: OccupationsState) => state.entities);

/*
* Get all entities and parse them
*/
export const getOccupations = createSelector(getOccupationData, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

import {Store, createSelector} from '@ngrx/store';
import {OccupationsViewState, getOccupationsViewsState} from '../reducers';
import {OccupationsState} from '../reducers/occupations.reducers';
import {getRouterState} from '../../../core/store/reducers';

export const getOccupationsState = createSelector(getOccupationsViewsState, (state: OccupationsViewState) => state.occupations);

export const getOccupationsEntities = createSelector(getOccupationsState, (state: OccupationsState) => state.entities);
export const getOccupationsLoaded = createSelector(getOccupationsState, (state: OccupationsState) => state.loaded);
export const getOccupationsLoading = createSelector(getOccupationsState, (state: OccupationsState) => state.loading);

/*
* Get all entities and parse them
*/
export const getOccupations = createSelector(getOccupationsEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

/*
Get single entity, by id
*/
export const getSelectedOccupation = createSelector(getOccupationsEntities, getRouterState, (entities, router): Occupation => {
  return router.state && entities[router.state.params.id];
});

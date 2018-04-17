import {Store, createSelector} from '@ngrx/store';
import {DegreesViewState, getDegreesViewsState} from '../reducers';
import {DegreesState} from '../reducers/degrees.reducers';
import {getRouterState} from '../../../core/store/reducers';

export const getDegreesState = createSelector(getDegreesViewsState, (state: DegreesViewState) => state.degrees);

export const getDegreesEntities = createSelector(getDegreesState, (state: DegreesState) => state.entities);
export const getDegreesLoaded = createSelector(getDegreesState, (state: DegreesState) => state.loaded);
export const getDegreesLoading = createSelector(getDegreesState, (state: DegreesState) => state.loading);

/*
* Get all entities and parse them
*/
export const getDegrees = createSelector(getDegreesEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

/*
Get single entity, by id
*/
export const getSelectedDegree = createSelector(getDegreesEntities, getRouterState, (entities, router): Degree => {
  return router.state && entities[router.state.params.id];
});

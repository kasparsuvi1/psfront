import {Store, createSelector} from '@ngrx/store';
import {RestosViewState, getRestosViewsState} from '../reducers';
import {RestosState} from '../reducers/restos.reducers';
import {getRouterState} from '../../../core/store/reducers';

export const getRestosState = createSelector(getRestosViewsState, (state: RestosViewState) => state.restos);

export const getRestosEntities = createSelector(getRestosState, (state: RestosState) => state.entities);
export const getRestosLoaded = createSelector(getRestosState, (state: RestosState) => state.loaded);
export const getRestosLoading = createSelector(getRestosState, (state: RestosState) => state.loading);

/*
* Get all entities and parse them
*/
export const getRestos = createSelector(getRestosEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

/*
Get single entity, by id
*/
export const getSelectedResto = createSelector(getRestosEntities, getRouterState, (entities, router): Resto => {
  return router.state && entities[router.state.params.id];
});

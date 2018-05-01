import {Store, createSelector} from '@ngrx/store';
import {UserViewState, getUserViewsState} from '../reducers';
import {RestosState} from '../reducers/restos.reducers';
import {getRouterState} from '../../../core/store/reducers';

export const getRestosState = createSelector(getUserViewsState, (state: UserViewState) => state.restos);

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
* Get Restos, that are in selected hotel.
*/
export const getFilteredRestos = createSelector(getRestosState, (state: RestosState) => {
  let data = Object.keys(state.entities).map(id => state.entities[id]);
  if (state.filters) {
    data = data.filter(resto => resto.id === state.filters);
  }
  return data;
});

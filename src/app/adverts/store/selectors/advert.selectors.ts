import {Store, createSelector} from '@ngrx/store';
import {AdvertsViewState, getAdvertsViewsState} from '../reducers';
import {AdvertsState} from '../reducers/adverts.reducers';
import {getRouterState} from '../../../core/store/reducers';

export const getAdvertsState = createSelector(getAdvertsViewsState, (state: AdvertsViewState) => state.adverts);

export const getAdvertsEntities = createSelector(getAdvertsState, (state: AdvertsState) => state.entities);
export const getAdvertsLoaded = createSelector(getAdvertsState, (state: AdvertsState) => state.loaded);
export const getAdvertsLoading = createSelector(getAdvertsState, (state: AdvertsState) => state.loading);

/*
* Get all entities and parse them
*/
export const getAdverts = createSelector(getAdvertsEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

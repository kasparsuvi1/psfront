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

export const getFilteredAdverts = createSelector(getAdvertsState, (state: AdvertsState) => {
  let data = Object.keys(state.entities).map(id => state.entities[id]);
  if (state.filters.hotel) {
    data = data.filter(advert => advert.hotels[0] && advert.hotels[0].id === state.filters.hotel);
  }
  return data;
});

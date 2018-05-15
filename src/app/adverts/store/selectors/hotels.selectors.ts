import {Store, createSelector} from '@ngrx/store';
import {AdvertsViewState, getAdvertsViewsState} from '../reducers';
import {HotelsState} from '../reducers/hotels.reducers';
import {getRouterState} from '../../../core/store/reducers';

export const getHotelsState = createSelector(getAdvertsViewsState, (state: AdvertsViewState) => state.hotels);

export const getHotelsEntities = createSelector(getHotelsState, (state: HotelsState) => state.entities);
export const getHotelsLoaded = createSelector(getHotelsState, (state: HotelsState) => state.loaded);
export const getHotelsLoading = createSelector(getHotelsState, (state: HotelsState) => state.loading);

/*
* Get all entities and parse them
*/
export const getHotels = createSelector(getHotelsEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

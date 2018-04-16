import {Store, createSelector} from '@ngrx/store';
import {HotelsViewState, getHotelsViewsState} from '../reducers';
import {HotelsState} from '../reducers/hotels.reducers';
import {getRouterState} from '../../../core/store/reducers';

export const getHotelsState = createSelector(getHotelsViewsState, (state: HotelsViewState) => state.hotels);

export const getHotelsEntities = createSelector(getHotelsState, (state: HotelsState) => state.entities);
export const getHotelsLoaded = createSelector(getHotelsState, (state: HotelsState) => state.loaded);
export const getHotelsLoading = createSelector(getHotelsState, (state: HotelsState) => state.loading);

/*
* Get all entities and parse them
*/
export const getHotels = createSelector(getHotelsEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

/*
Get single entity, by id
*/
export const getSelectedHotel = createSelector(getHotelsEntities, getRouterState, (entities, router): Hotel => {
  return router.state && entities[router.state.params.id];
});

import {Store, createSelector, createFeatureSelector} from '@ngrx/store';
import {AdvertsState} from '../reducers/advert.reducers';

export const getUserAdvertsState = createFeatureSelector<AdvertsState>('userAdverts');

export const getUserAdvertsData = createSelector(getUserAdvertsState, (state: AdvertsState) => state.entities);

/*
* Get all entities and parse them
*/
export const getUserAdverts = createSelector(getUserAdvertsData, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {advertsReducer, AdvertsState} from './adverts.reducers';
import {hotelsReducer, HotelsState} from './hotels.reducers';

export interface AdvertsViewState {
  adverts: AdvertsState;
  hotels: HotelsState;
}

export const reducers: ActionReducerMap<AdvertsViewState> = {
  adverts: advertsReducer,
  hotels: hotelsReducer
};

export const getAdvertsViewsState = createFeatureSelector<AdvertsViewState>('adverts');

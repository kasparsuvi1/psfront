import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {advertsReducer, AdvertsState} from './adverts.reducers';
import {hotelsReducer, HotelsState} from './hotels.reducers';
import {responsesReducer, ResponsesState} from './responses.reducers';

export interface AdvertsViewState {
  adverts: AdvertsState;
  hotels: HotelsState;
  responses: ResponsesState;
}

export const reducers: ActionReducerMap<AdvertsViewState> = {
  adverts: advertsReducer,
  hotels: hotelsReducer,
  responses: responsesReducer
};

export const getAdvertsViewsState = createFeatureSelector<AdvertsViewState>('adverts');

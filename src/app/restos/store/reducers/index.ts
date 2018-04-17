import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {restosReducer, RestosState} from './restos.reducers';
import {hotelsReducer, HotelsState} from './hotels.reducers';

export interface RestosViewState {
  restos: RestosState;
  hotels: HotelsState;
}

export const reducers: ActionReducerMap<RestosViewState> = {
  restos: restosReducer,
  hotels: hotelsReducer
};

export const getRestosViewsState = createFeatureSelector<RestosViewState>('restos');

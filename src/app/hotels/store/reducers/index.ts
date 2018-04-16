import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {hotelsReducer, HotelsState} from './hotels.reducers';

export interface HotelsViewState {
  hotels: HotelsState;
}

export const reducers: ActionReducerMap<HotelsViewState> = {
  hotels: hotelsReducer
};

export const getHotelsViewsState = createFeatureSelector<HotelsViewState>('hotels');

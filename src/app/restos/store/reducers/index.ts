import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {restosReducer, RestosState} from './restos.reducers';

export interface RestosViewState {
  restos: RestosState;
}

export const reducers: ActionReducerMap<RestosViewState> = {
  restos: restosReducer
};

export const getRestosViewsState = createFeatureSelector<RestosViewState>('restos');

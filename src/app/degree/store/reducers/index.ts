import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {degreesReducer, DegreesState} from './degrees.reducers';

export interface DegreesViewState {
  degrees: DegreesState;
}

export const reducers: ActionReducerMap<DegreesViewState> = {
  degrees: degreesReducer
};

export const getDegreesViewsState = createFeatureSelector<DegreesViewState>('degree');

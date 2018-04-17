import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {occupationsReducer, OccupationsState} from './occupations.reducers';

export interface OccupationsViewState {
  occupations: OccupationsState;
}

export const reducers: ActionReducerMap<OccupationsViewState> = {
  occupations: occupationsReducer
};

export const getOccupationsViewsState = createFeatureSelector<OccupationsViewState>('occupation');

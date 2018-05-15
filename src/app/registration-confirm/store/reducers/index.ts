import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {confirmReducer, ConfirmState} from './confirm.reducers';

export interface ConfirmViewState {
  confirm: ConfirmState;
}

export const reducers: ActionReducerMap<ConfirmViewState> = {
  confirm: confirmReducer
};

export const getConfirmViewsState = createFeatureSelector<ConfirmViewState>('confirm');

import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {usersReducer, UsersState} from './users.reducers';

export interface AdminViewState {
  users: UsersState;
}

export const reducers: ActionReducerMap<AdminViewState> = {
  users: usersReducer
};

export const getAdminViewsState = createFeatureSelector<AdminViewState>('admin');

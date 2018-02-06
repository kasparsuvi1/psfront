import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {UserReducer, UserState} from './user.reducer';

export interface UsersViewState {
  users: UserState;
}

export const reducers: ActionReducerMap<UsersViewState> = {
  users: UserReducer
};

export const getUsersViewState = createFeatureSelector<UsersViewState>('users');

import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {userReducer, UserState} from './user.reducers';

export interface UserViewState {
  user: UserState;
}

export const reducers: ActionReducerMap<UserViewState> = {
  user: userReducer
};

export const getUserViewsState = createFeatureSelector<UserViewState>('user');

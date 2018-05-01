import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {userReducer, UserState} from './user.reducers';
import {hotelsReducer, HotelsState} from './hotels.reducers';
import {RestosState, restosReducer} from './restos.reducers';

export interface UserViewState {
  user: UserState;
  hotels: HotelsState;
  restos: RestosState;
}

export const reducers: ActionReducerMap<UserViewState> = {
  user: userReducer,
  hotels: hotelsReducer,
  restos: restosReducer
};

export const getUserViewsState = createFeatureSelector<UserViewState>('user');

import {Store, createSelector} from '@ngrx/store';
import {UserViewState, getUserViewsState} from '../reducers';
import {UserState} from '../reducers/user.reducers';
import {getRouterState} from '../../../core/store/reducers';

export const getUserState = createSelector(getUserViewsState, (state: UserViewState) => state.user);

export const getUserEntities = createSelector(getUserState, (state: UserState) => state.entity);
export const getUserLoaded = createSelector(getUserState, (state: UserState) => state.loaded);
export const getUserLoading = createSelector(getUserState, (state: UserState) => state.loading);

import {createSelector} from '@ngrx/store';
import {AdminViewState, getAdminViewsState} from '../reducers';
import {UsersState} from '../reducers/users.reducers';

export const getUsersState = createSelector(getAdminViewsState, (state: AdminViewState) => state.users);

export const getUsersEntities = createSelector(getUsersState, (state: UsersState) => state.entities);
export const getUsersLoaded = createSelector(getUsersState, (state: UsersState) => state.loaded);
export const getUsersLoading = createSelector(getUsersState, (state: UsersState) => state.loading);

/*
* Get all entities and parse them
*/
export const getUsers = createSelector(getUsersEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

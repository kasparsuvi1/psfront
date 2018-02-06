import {createSelector} from '@ngrx/store';
import {UsersViewState, getUsersViewState} from '../reducers';
import {UserState} from '../reducers/user.reducer';
import {getRouterState} from '../../../core/store/reducers';

export const getUsersState = createSelector(getUsersViewState, (state: UsersViewState) => state.users);

export const getUsersEntities = createSelector(getUsersState, (state: UserState) => state.entities);

export const getUsersLoaded = createSelector(getUsersState, (state: UserState) => state.loaded);
export const getUsersLoading = createSelector(getUsersState, (state: UserState) => state.loading);

/*
Get all entities and parse them
*/
export const getAllUsers = createSelector(getUsersEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

/*
Get single entity, by id
*/
export const getSelectedUser = createSelector(getUsersEntities, getRouterState, (entities, router): User => {
  return router.state && entities[router.state.params.id];
});

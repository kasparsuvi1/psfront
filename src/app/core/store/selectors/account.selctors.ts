import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AccountState} from '../reducers';

export const getAccountState = createFeatureSelector<AccountState>('account');

export const getAccountData = createSelector(getAccountState, (state: AccountState) => state.account);
export const getUserData = createSelector(getAccountState, (state: AccountState) => state.user);

import {Params} from '@angular/router';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {storeFreeze} from 'ngrx-store-freeze';
import {environment} from '../../../../environments/environment';
import {accountReducer, AccountState} from './account.reducers';

export * from './router.reducers';
export * from './account.reducers';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  routerReducer: RouterReducerState<RouterStateUrl>;
  account: AccountState;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: routerReducer,
  account: accountReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];

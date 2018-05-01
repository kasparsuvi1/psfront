import {Params} from '@angular/router';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {storeFreeze} from 'ngrx-store-freeze';
import {environment} from '../../../../environments/environment';
import {accountReducer, AccountState} from './account.reducers';
import {DegreesState, degreesReducer} from './degrees.reducers';
import {OccupationsState, occupationsReducer} from './occupations.reducers';
import {AdvertsState, advertsReducer} from './advert.reducers';

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
  degrees: DegreesState;
  occupations: OccupationsState;
  userAdverts: AdvertsState;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: routerReducer,
  account: accountReducer,
  degrees: degreesReducer,
  occupations: occupationsReducer,
  userAdverts: advertsReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];

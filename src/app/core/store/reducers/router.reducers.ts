import {ActivatedRouteSnapshot, Params, RouterStateSnapshot} from '@angular/router';
import {createFeatureSelector} from '@ngrx/store';
import {routerReducer, RouterReducerState, RouterStateSerializer} from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('routerReducer');

/*
Return url, params and queryParams from Router snapshot, instead of the whole snapshot
*/
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const {url} = routerState;
    const {queryParams} = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const {params} = state;

    return {url, params, queryParams};
  }
}

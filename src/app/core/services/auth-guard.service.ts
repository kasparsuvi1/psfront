import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {State} from '../store/reducers';
import {getAccountData} from '../store/selectors';
import {map, take} from 'rxjs/operators';
import {Login} from '../store/actions';
import {Observable} from 'rxjs/Observable';
import {AccountModel} from '../models/account.models';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private store: Store<State>) {}

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(getAccountData),
      map(account => {
        const expectedRoles = next.data.expectedRoles;
        const isMissingRole = account.roles.some(role => expectedRoles.indexOf(role) === -1);
        const payload = JSON.parse(localStorage.getItem('account')) as AccountModel;

        if (!account.authenticated || isMissingRole) {
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}

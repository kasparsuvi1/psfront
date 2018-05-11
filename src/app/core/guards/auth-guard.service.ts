import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {State} from '../store/reducers';
import {getAccountData} from '../store/selectors';
import {map, take} from 'rxjs/operators';
import {Login} from '../store/actions';
import {Observable, of} from 'rxjs';
import {AccountModel} from '../models/account.models';
import {Go} from '../store';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private store: Store<State>, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(getAccountData),
      map((account: AccountModel) => {
        const expectedRoles = next.data.expectedRoles;
        const havingRole = account.roles.some(role => expectedRoles.indexOf(role) !== -1);

        if (account.authenticated && havingRole) {
          return true;
        } else {
          this.store.dispatch(new Go({path: ['/home']}));
          return false;
        }
      }),
      take(1)
    );
  }
}

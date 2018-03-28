import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {State} from '../store/reducers';
import {getAccountData} from '../store/selectors';
import {map, take} from 'rxjs/operators';
import {Login} from '../store/actions';
import {Observable} from 'rxjs/Observable';
import {AccountModel} from '../models/account.models';
import {of} from 'rxjs/observable/of';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private store: Store<State>, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
    const account = JSON.parse(localStorage.getItem('account')) as AccountModel;
    const expectedRoles = next.data.expectedRoles;

    const isMissingRole = account ? account.roles.some(role => expectedRoles.indexOf(role) === -1) : '';
    if (!account || !account.authenticated || isMissingRole) {
      this.router.navigate(['/login']);
      return of(false);
    }
    return of(true);
  }
}

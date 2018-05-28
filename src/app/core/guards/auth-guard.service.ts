import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {State} from '../store/reducers';
import {getAccountData} from '../store/selectors';
import {map, take} from 'rxjs/operators';
import {Login, Logout} from '../store/actions';
import {Observable, of} from 'rxjs';
import {AccountModel} from '../models/account.models';
import {Go} from '../store';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private store: Store<State>, private router: Router, private authService: AuthenticationService) {}

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(getAccountData),
      map((account: AccountModel) => {
        const expectedRoles = next.data.expectedRoles;
        const havingRole = account.roles.some(role => expectedRoles.indexOf(role) !== -1);
        if (!account.authenticated || this.authService.isTokenExpired()) {
          this.store.dispatch(new Logout());
        }

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

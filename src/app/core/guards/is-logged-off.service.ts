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
import {Go} from '../store';

@Injectable()
export class IsLoggedOffService {
  constructor(private store: Store<State>, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(getAccountData),
      map((account: AccountModel) => {
        if (!account.authenticated) {
          return true;
        } else {
          this.store.dispatch(new Go({path: ['/dashboard']}));
          return false;
        }
      }),
      take(1)
    );
  }
}

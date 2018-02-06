import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {catchError, filter, switchMap, take, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {UsersViewState} from '../store/reducers';
import {getUsersLoaded} from '../store/selectors';
import {LoadUsers} from '../store/actions';

@Injectable()
export class UsersGuard implements CanActivate {
  constructor(private store: Store<UsersViewState>) {
  }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(getUsersLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new LoadUsers());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}

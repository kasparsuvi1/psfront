import {Injectable} from '@angular/core';
import {UsersViewState} from '../store/reducers';
import {Store} from '@ngrx/store';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {of} from 'rxjs/observable/of';
import {catchError, filter, map, switchMap, take, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {LoadUsers} from '../store/actions';
import {getUsersEntities, getUsersLoaded} from '../store/selectors';

@Injectable()
export class UserExistsGuard implements CanActivate {
  constructor(private store: Store<UsersViewState>) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.id, 10);
        return this.userExists(id);
      }),
      catchError(() => of(false))
    );
  }

  userExists(id: number): Observable<boolean> {
    return this.store
      .select(getUsersEntities)
      .pipe(map((entities: { [key: number]: User }) => !!entities[id]), take(1));
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

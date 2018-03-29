import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {UsersService} from '../../services/users.service';
import {GET_USERS, GetUsers, GetUsersFail, GetUsersSuccess} from '../actions/users.actions';

@Injectable()
export class UsersEffect {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  @Effect()
  loadUserActivityLog$ = this.actions$.ofType(GET_USERS).pipe(
    switchMap((action: GetUsers) => {
      return this.usersService.getUsers().pipe(map(res => new GetUsersSuccess(res)), catchError(error => of(new GetUsersFail(error))));
    })
  );
}

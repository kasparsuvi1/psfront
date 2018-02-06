import {Injectable} from '@angular/core';

import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';

import {of} from 'rxjs/observable/of';
import {UserService} from '../../../core/services/user.service';
import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CreateUser,
  CreateUserFail,
  CreateUserSuccess,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DeleteUser,
  DeleteUserFail,
  DeleteUserSuccess,
  LOAD_USERS,
  LoadUsersFail,
  LoadUsersSuccess,
  UPDATE_USER,
  UpdateUser,
  UpdateUserFail,
  UpdateUserSuccess
} from '../actions';
import {Go} from '../../../core/store/actions';

@Injectable()
export class UserEffect {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  loadUsers$ = this.actions$.ofType(LOAD_USERS).pipe(
    switchMap(() => {
      return this.userService
        .getUsers()
        .pipe(map(res => new LoadUsersSuccess(res)), catchError(error => of(new LoadUsersFail(error))));
    })
  );

  @Effect()
  addUser$ = this.actions$.ofType(CREATE_USER).pipe(
    map((action: CreateUser) => action.payload),
    switchMap(user => {
      return this.userService
        .addUser(user)
        .pipe(map(res => new CreateUserSuccess(res)), catchError(error => of(new CreateUserFail(error))));
    })
  );

  @Effect()
  addUserSuccess$ = this.actions$.ofType(CREATE_USER_SUCCESS).pipe(
    map((action: CreateUserSuccess) => action.payload),
    map(
      user =>
        new Go({
          path: ['/detainees/', user.id]
        })
    )
  );

  @Effect()
  updateUser$ = this.actions$.ofType(UPDATE_USER).pipe(
    map((action: UpdateUser) => action.payload),
    switchMap(user => {
      return this.userService
        .updateUser(user)
        .pipe(map(res => new UpdateUserSuccess(res)), catchError(error => of(new UpdateUserFail(error))));
    })
  );

  @Effect()
  deleteUser$ = this.actions$.ofType(DELETE_USER).pipe(
    map((action: DeleteUser) => action.payload),
    switchMap(user => {
      return this.userService
        .deleteUser(user)
        .pipe(map(res => new DeleteUserSuccess(user)), catchError(error => of(new DeleteUserFail(error))));
    })
  );

  @Effect()
  // OfType can take in multiple parameters, aka update, delete and others
  handleUserSuccess$ = this.actions$.ofType(DELETE_USER_SUCCESS).pipe(
    map(
      () =>
        new Go({
          path: ['/users']
        })
    )
  );
}

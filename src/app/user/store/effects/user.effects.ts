import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {UserService} from '../../services/user.service';
import {
  GET_USER,
  GetUser,
  GetUserFail,
  GetUserSuccess,
  DELETE_USER,
  DeleteUser,
  DeleteUserSuccess,
  DeleteUserFail,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UpdateUser,
  UpdateUserSuccess,
  UpdateUserFail,
  ChangePassword,
  ChangePasswordSuccess,
  ChangePasswordFail,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL
} from '../actions/user.actions';
import {MessagesService, messages} from '../../../core/services/messages.service';
import {Go} from '../../../core/store';

@Injectable()
export class UserEffect {
  constructor(private actions$: Actions, private userService: UserService, private messagesService: MessagesService) {}

  @Effect()
  getUser$ = this.actions$.ofType(GET_USER).pipe(
    switchMap((action: GetUser) => {
      return this.userService.getCurrentUser().pipe(map(res => new GetUserSuccess(res)), catchError(error => of(new GetUserFail(error))));
    })
  );

  @Effect()
  deleteUser$ = this.actions$.ofType(DELETE_USER).pipe(
    switchMap((action: DeleteUser) => {
      return this.userService
        .deleteUser(action.payload)
        .pipe(map(res => new DeleteUserSuccess(res)), catchError(error => of(new DeleteUserFail(error))));
    })
  );

  @Effect()
  deleteUserSuccess$ = this.actions$.ofType(DELETE_USER_SUCCESS).pipe(
    map(() => {
      this.messagesService.success(messages.deleteUser.success);
      localStorage.clear();
      return new Go({path: [`/home`]});
    })
  );

  @Effect({dispatch: false})
  deleteUserFail$ = this.actions$.ofType(DELETE_USER_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.deleteUser.warning);
    })
  );

  @Effect()
  updateUser$ = this.actions$.ofType(UPDATE_USER).pipe(
    switchMap((action: UpdateUser) => {
      return this.userService
        .updateUser(action.payload)
        .pipe(map(res => new UpdateUserSuccess(res)), catchError(error => of(new UpdateUserFail(error))));
    })
  );

  @Effect()
  updateUserSuccess$ = this.actions$.ofType(UPDATE_USER_SUCCESS).pipe(
    map((action: UpdateUserSuccess) => {
      return new GetUser();
    })
  );

  @Effect({dispatch: false})
  updateUserFail$ = this.actions$.ofType(UPDATE_USER_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.updateUser.warning);
    })
  );

  @Effect()
  changePassword$ = this.actions$.ofType(CHANGE_PASSWORD).pipe(
    switchMap((action: ChangePassword) => {
      return this.userService
        .changePassword(action.payload)
        .pipe(map(res => new ChangePasswordSuccess(res)), catchError(error => of(new ChangePasswordFail(error))));
    })
  );

  @Effect()
  changePasswordSuccess$ = this.actions$.ofType(CHANGE_PASSWORD_SUCCESS).pipe(
    map(() => {
      this.messagesService.success(messages.changePassword.success);
      return new Go({path: [`/user`]});
    })
  );

  @Effect({dispatch: false})
  changePasswordFail$ = this.actions$.ofType(CHANGE_PASSWORD_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.changePassword.warning);
    })
  );
}

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {RegisterService} from '../../services/register.service';
import {
  REGISTER,
  Register,
  RegisterFail,
  RegisterSuccess,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  RESEND_ACTIVATION,
  ResendActivationSuccess,
  ResendActivationFail
} from '../actions/register.actions';
import {Go} from '../../../core/store';
import {MessagesService, messages} from '../../../core/services/messages.service';
import {RESEND_ACTIVATION_SUCCESS, RESEND_ACTIVATION_FAIL} from '../actions';

@Injectable()
export class RegisterEffect {
  constructor(private actions$: Actions, private registerService: RegisterService, private messagesService: MessagesService) {}

  @Effect()
  register$ = this.actions$.ofType(REGISTER).pipe(
    switchMap((action: Register) => {
      return this.registerService
        .register(action.payload)
        .pipe(map(res => new RegisterSuccess(res)), catchError(error => of(new RegisterFail(error))));
    })
  );

  @Effect()
  registerSuccess = this.actions$.ofType(REGISTER_SUCCESS).pipe(
    map((data: any) => {
      return new Go({path: ['/register/activate']});
    })
  );

  @Effect({dispatch: false})
  registerFail = this.actions$.ofType(REGISTER_FAIL).pipe(
    map((action: RegisterFail) => {
      if (action.payload.error.subErrors) {
        this.messagesService.warn(action.payload.error.subErrors[0].message);
      } else {
        this.messagesService.warn(action.payload.error.message);
      }
    })
  );

  @Effect()
  resend$ = this.actions$.ofType(RESEND_ACTIVATION).pipe(
    switchMap((action: Register) => {
      return this.registerService
        .reSendActivation(action.payload)
        .pipe(map(res => new ResendActivationSuccess(res)), catchError(error => of(new ResendActivationFail(error))));
    })
  );

  @Effect()
  resendSuccess = this.actions$.ofType(RESEND_ACTIVATION_SUCCESS).pipe(
    map((data: any) => {
      return new Go({path: ['/register/activate']});
    })
  );

  @Effect({dispatch: false})
  resendFail = this.actions$.ofType(RESEND_ACTIVATION_FAIL).pipe(
    map((action: ResendActivationFail) => {
      this.messagesService.warn(action.payload.error.message);
    })
  );
}

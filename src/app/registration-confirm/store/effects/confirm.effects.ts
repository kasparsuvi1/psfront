import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {RegistrationConfirmService} from '../../services/registration-confirm.service';
import {
  CONFIRM_REGISTRATION,
  CONFIRM_REGISTRATION_SUCCESS,
  CONFIRM_REGISTRATION_FAIL,
  ConfirmRegistration,
  ConfirmRegistrationSuccess,
  ConfirmRegistrationFail
} from '../actions/confirm.actions';
import {MessagesService, messages} from '../../../core/services/messages.service';
import {Go} from '../../../core/store';

@Injectable()
export class ConfirmEffect {
  constructor(
    private actions$: Actions,
    private registrationConfirmService: RegistrationConfirmService,
    private messagesService: MessagesService
  ) {}

  @Effect()
  confirmRegistration$ = this.actions$.ofType(CONFIRM_REGISTRATION).pipe(
    switchMap((action: ConfirmRegistration) => {
      return this.registrationConfirmService
        .registrationConfirm(action.payload)
        .pipe(map(res => new ConfirmRegistrationSuccess(res)), catchError(error => of(new ConfirmRegistrationFail(error))));
    })
  );

  @Effect({dispatch: false})
  confirmRegistrationSuccess$ = this.actions$.ofType(CONFIRM_REGISTRATION_SUCCESS).pipe(
    map(() => {
      this.messagesService.success(messages.confirmRegistration.success);
    })
  );

  @Effect({dispatch: false})
  confirmRegistrationFail$ = this.actions$.ofType(CONFIRM_REGISTRATION_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.confirmRegistration.warning);
    })
  );
}

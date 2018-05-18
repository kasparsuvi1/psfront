import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ResponsesService} from '../../services/responses.service';
import {
  AddResponse,
  AddResponseSuccess,
  AddResponseFail,
  ADD_RESPONSE_SUCCESS,
  ADD_RESPONSE,
  ADD_RESPONSE_FAIL,
  GetAdverts
} from '../actions';
import {MessagesService, messages} from '../../../core/services/messages.service';
import {Go} from '../../../core/store';

@Injectable()
export class ResponsesEffect {
  constructor(private actions$: Actions, private responsesService: ResponsesService, private messagesService: MessagesService) {}

  @Effect()
  addResponse$ = this.actions$.ofType(ADD_RESPONSE).pipe(
    switchMap((action: AddResponse) => {
      return this.responsesService
        .addResponse(action.payload)
        .pipe(map(res => new AddResponseSuccess(res)), catchError(error => of(new AddResponseFail(error))));
    })
  );

  @Effect()
  addResponseSuccess$ = this.actions$.ofType(ADD_RESPONSE_SUCCESS).pipe(
    map(() => new GetAdverts()),
    map(() => {
      this.messagesService.success(messages.addResponse.success);
      return new Go({path: [`/dashboard/`]});
    })
  );

  @Effect()
  addResponseFail$ = this.actions$.ofType(ADD_RESPONSE_FAIL).pipe(
    map(() => new GetAdverts()),
    map(() => {
      this.messagesService.warn(messages.addResponse.warning);
      return new Go({path: [`/adverts/`]});
    })
  );
}

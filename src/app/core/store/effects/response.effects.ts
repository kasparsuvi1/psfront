import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {ResponseService} from '../../services/response.service';
import {
  GET_USER_RESPONSES,
  GetUserResponses,
  GetUserResponsesFail,
  GetUserResponsesSuccess,
  AddResponse,
  AddResponseSuccess,
  AddResponseFail,
  ADD_RESPONSE_SUCCESS,
  ADD_RESPONSE,
  ADD_RESPONSE_FAIL,
  DELETE_RESPONSE,
  DeleteResponse,
  DeleteResponseSuccess,
  DeleteResponseFail,
  DELETE_RESPONSE_SUCCESS,
  DELETE_RESPONSE_FAIL,
  UPDATE_RESPONSE,
  UPDATE_RESPONSE_SUCCESS,
  UPDATE_RESPONSE_FAIL,
  UpdateResponse,
  UpdateResponseSuccess,
  UpdateResponseFail
} from '../actions/response.actions';
import {MessagesService, messages} from '../../../core/services/messages.service';
import {Go} from '../../../core/store/actions/router.actions';

@Injectable()
export class ResponsesEffect {
  constructor(private actions$: Actions, private responseService: ResponseService, private messagesService: MessagesService) {}

  @Effect()
  getUserResponses$ = this.actions$.ofType(GET_USER_RESPONSES).pipe(
    switchMap((action: GetUserResponses) => {
      return this.responseService
        .getUserResponses()
        .pipe(map(res => new GetUserResponsesSuccess(res)), catchError(error => of(new GetUserResponsesFail(error))));
    })
  );

  @Effect()
  addResponse$ = this.actions$.ofType(ADD_RESPONSE).pipe(
    switchMap((action: AddResponse) => {
      return this.responseService
        .addResponse(action.payload)
        .pipe(map(res => new AddResponseSuccess(res)), catchError(error => of(new AddResponseFail(error))));
    })
  );

  @Effect()
  addResponseSuccess$ = this.actions$.ofType(ADD_RESPONSE_SUCCESS).pipe(
    map(() => new GetUserResponses()),
    map(() => {
      this.messagesService.success(messages.addResponse.success);
      return new Go({path: [`/dashboard/`]});
    })
  );

  @Effect()
  addResponseFail$ = this.actions$.ofType(ADD_RESPONSE_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.addResponse.warning);
    }),
    map(() => new GetUserResponses())
  );

  @Effect()
  deleteResponse$ = this.actions$.ofType(DELETE_RESPONSE).pipe(
    switchMap((action: DeleteResponse) => {
      return this.responseService
        .deleteResponse(action.payload)
        .pipe(map(res => new DeleteResponseSuccess(res)), catchError(error => of(new DeleteResponseFail(error))));
    })
  );

  @Effect()
  deleteResponseSuccess$ = this.actions$.ofType(DELETE_RESPONSE_SUCCESS).pipe(
    map(() => new GetUserResponses()),
    map(() => {
      this.messagesService.success(messages.deleteResponse.success);
      return new Go({path: [`/dashboard/`]});
    })
  );

  @Effect()
  deleteResponseFail$ = this.actions$.ofType(DELETE_RESPONSE_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.deleteResponse.warning);
    }),
    map(() => new GetUserResponses())
  );

  @Effect()
  updateResponse$ = this.actions$.ofType(UPDATE_RESPONSE).pipe(
    switchMap((action: UpdateResponse) => {
      return this.responseService
        .updateResponse(action.payload)
        .pipe(map(res => new UpdateResponseSuccess(res)), catchError(error => of(new UpdateResponseFail(error))));
    })
  );

  @Effect()
  updateResponseSuccess$ = this.actions$.ofType(UPDATE_RESPONSE_SUCCESS).pipe(
    map(() => new GetUserResponses()),
    map(() => {
      this.messagesService.success(messages.updateResponse.success);
      return new Go({path: [`/dashboard/`]});
    })
  );

  @Effect()
  updateResponseFail$ = this.actions$.ofType(UPDATE_RESPONSE_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.updateResponse.warning);
    }),
    map(() => new GetUserResponses())
  );
}

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {AdvertService} from '../../services/advert.service';
import {
  GET_USER_ADVERTS,
  GetUserAdverts,
  GetUserAdvertsFail,
  GetUserAdvertsSuccess,
  AddAdvert,
  AddAdvertSuccess,
  AddAdvertFail,
  ADD_ADVERT_SUCCESS,
  ADD_ADVERT,
  ADD_ADVERT_FAIL,
  DELETE_ADVERT,
  DeleteAdvert,
  DeleteAdvertSuccess,
  DeleteAdvertFail,
  DELETE_ADVERT_SUCCESS,
  DELETE_ADVERT_FAIL,
  UPDATE_ADVERT,
  UPDATE_ADVERT_SUCCESS,
  UPDATE_ADVERT_FAIL,
  UpdateAdvert,
  UpdateAdvertSuccess,
  UpdateAdvertFail,
  AcceptResponse,
  AcceptResponseSuccess,
  AcceptResponseFail,
  ACCEPT_RESPONSE,
  ACCEPT_RESPONSE_SUCCESS,
  ACCEPT_RESPONSE_FAIL,
  DECLINE_RESPONSE,
  DECLINE_RESPONSE_SUCCESS,
  DECLINE_RESPONSE_FAIL,
  DeclineResponse,
  DeclineResponseSuccess,
  DeclineResponseFail
} from '../actions/advert.actions';
import {MessagesService, messages} from '../../../core/services/messages.service';
import {Go} from '../../../core/store/actions/router.actions';

@Injectable()
export class AdvertsEffect {
  constructor(private actions$: Actions, private advertService: AdvertService, private messagesService: MessagesService) {}

  @Effect()
  getUserAdverts$ = this.actions$.ofType(GET_USER_ADVERTS).pipe(
    switchMap((action: GetUserAdverts) => {
      return this.advertService
        .getUserAdverts()
        .pipe(map(res => new GetUserAdvertsSuccess(res)), catchError(error => of(new GetUserAdvertsFail(error))));
    })
  );

  @Effect()
  addAdvert$ = this.actions$.ofType(ADD_ADVERT).pipe(
    switchMap((action: AddAdvert) => {
      return this.advertService
        .addAdvert(action.payload)
        .pipe(map(res => new AddAdvertSuccess(res)), catchError(error => of(new AddAdvertFail(error))));
    })
  );

  @Effect()
  addAdvertSuccess$ = this.actions$.ofType(ADD_ADVERT_SUCCESS).pipe(
    map(() => new GetUserAdverts()),
    map(() => {
      this.messagesService.success(messages.addAdvert.success);
      return new Go({path: [`/dashboard/`]});
    })
  );

  @Effect()
  addAdvertFail$ = this.actions$.ofType(ADD_ADVERT_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.addAdvert.warning);
    }),
    map(() => new GetUserAdverts())
  );

  @Effect()
  deleteAdvert$ = this.actions$.ofType(DELETE_ADVERT).pipe(
    switchMap((action: DeleteAdvert) => {
      return this.advertService
        .deleteAdvert(action.payload)
        .pipe(map(res => new DeleteAdvertSuccess(res)), catchError(error => of(new DeleteAdvertFail(error))));
    })
  );

  @Effect()
  deleteAdvertSuccess$ = this.actions$.ofType(DELETE_ADVERT_SUCCESS).pipe(
    map(() => new GetUserAdverts()),
    map(() => {
      this.messagesService.success(messages.deleteAdvert.success);
      return new GetUserAdverts();
    })
  );

  @Effect()
  deleteAdvertFail$ = this.actions$.ofType(DELETE_ADVERT_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.deleteAdvert.warning);
    }),
    map(() => new GetUserAdverts())
  );

  @Effect()
  updateAdvert$ = this.actions$.ofType(UPDATE_ADVERT).pipe(
    switchMap((action: UpdateAdvert) => {
      return this.advertService
        .updateAdvert(action.payload)
        .pipe(map(res => new UpdateAdvertSuccess(res)), catchError(error => of(new UpdateAdvertFail(error))));
    })
  );

  @Effect()
  updateAdvertSuccess$ = this.actions$.ofType(UPDATE_ADVERT_SUCCESS).pipe(
    map(() => new GetUserAdverts()),
    map(() => {
      this.messagesService.success(messages.updateAdvert.success);
      return new Go({path: [`/dashboard/`]});
    })
  );

  @Effect()
  updateAdvertFail$ = this.actions$.ofType(UPDATE_ADVERT_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.updateAdvert.warning);
    }),
    map(() => new GetUserAdverts())
  );

  @Effect()
  acceptResponse$ = this.actions$.ofType(ACCEPT_RESPONSE).pipe(
    switchMap((action: AcceptResponse) => {
      return this.advertService
        .acceptResponse(action.payload.advertId, action.payload.responseId)
        .pipe(map(res => new AcceptResponseSuccess(res)), catchError(error => of(new AcceptResponseFail(error))));
    })
  );

  @Effect() acceptResponseSuccess$ = this.actions$.ofType(ACCEPT_RESPONSE_SUCCESS).pipe(map(() => new GetUserAdverts()));

  @Effect()
  acceptResponseFail$ = this.actions$.ofType(ACCEPT_RESPONSE_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.acceptResponse.warning);
    }),
    map(() => new GetUserAdverts())
  );

  @Effect()
  declineResponse$ = this.actions$.ofType(DECLINE_RESPONSE).pipe(
    switchMap((action: DeclineResponse) => {
      return this.advertService
        .declineResponse(action.payload.advertId, action.payload.responseId)
        .pipe(map(res => new DeclineResponseSuccess(res)), catchError(error => of(new DeclineResponseFail(error))));
    })
  );

  @Effect() declineResponseSuccess$ = this.actions$.ofType(DECLINE_RESPONSE_SUCCESS).pipe(map(() => new GetUserAdverts()));

  @Effect()
  declineResponseFail$ = this.actions$.ofType(DECLINE_RESPONSE_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.declineResponse.warning);
    }),
    map(() => new GetUserAdverts())
  );
}

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
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
  UpdateAdvertFail
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
      return new Go({path: [`/dashboard/`]});
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
}

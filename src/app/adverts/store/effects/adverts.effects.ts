import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {AdvertService} from '../../services/advert.service';
import {GET_ADVERTS, GetAdverts, GetAdvertsFail, GetAdvertsSuccess} from '../actions/adverts.actions';
import {MessagesService, messages} from '../../../core/services/messages.service';
import {Go} from '../../../core/store/actions/router.actions';

@Injectable()
export class AdvertsEffect {
  constructor(private actions$: Actions, private advertService: AdvertService, private messagesService: MessagesService) {}

  @Effect()
  getAdverts$ = this.actions$.ofType(GET_ADVERTS).pipe(
    switchMap((action: GetAdverts) => {
      return this.advertService
        .getAdverts()
        .pipe(map(res => new GetAdvertsSuccess(res)), catchError(error => of(new GetAdvertsFail(error))));
    })
  );
}

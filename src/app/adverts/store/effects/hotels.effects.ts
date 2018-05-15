import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {HotelService} from '../../services/hotels.service';
import {GET_HOTELS, GetHotels, GetHotelsFail, GetHotelsSuccess} from '../actions/hotels.actions';
import {MessagesService, messages} from '../../../core/services/messages.service';
import {Go} from '../../../core/store';

@Injectable()
export class HotelsEffect {
  constructor(private actions$: Actions, private hotelService: HotelService, private messagesService: MessagesService) {}

  @Effect()
  getHotels$ = this.actions$.ofType(GET_HOTELS).pipe(
    switchMap((action: GetHotels) => {
      return this.hotelService.getHotels().pipe(map(res => new GetHotelsSuccess(res)), catchError(error => of(new GetHotelsFail(error))));
    })
  );
}

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {HotelService} from '../../services/hotel.service';
import {
  GET_HOTELS,
  GetHotels,
  GetHotelsFail,
  GetHotelsSuccess,
  AddHotel,
  AddHotelSuccess,
  AddHotelFail,
  ADD_HOTEL_SUCCESS,
  ADD_HOTEL,
  ADD_HOTEL_FAIL,
  DELETE_HOTEL,
  DeleteHotel,
  DeleteHotelSuccess,
  DeleteHotelFail,
  DELETE_HOTEL_SUCCESS,
  DELETE_HOTEL_FAIL,
  UPDATE_HOTEL,
  UPDATE_HOTEL_SUCCESS,
  UPDATE_HOTEL_FAIL,
  UpdateHotel,
  UpdateHotelSuccess,
  UpdateHotelFail
} from '../actions/hotels.actions';
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

  @Effect()
  addHotel$ = this.actions$.ofType(ADD_HOTEL).pipe(
    switchMap((action: AddHotel) => {
      return this.hotelService
        .addHotel(action.payload)
        .pipe(map(res => new AddHotelSuccess(res)), catchError(error => of(new AddHotelFail(error))));
    })
  );

  @Effect()
  addHotelSuccess$ = this.actions$.ofType(ADD_HOTEL_SUCCESS).pipe(
    map(() => new GetHotels()),
    map(() => {
      this.messagesService.success(messages.addHotel.success);
      return new Go({path: [`/hotels/`]});
    })
  );

  @Effect()
  addHotelFail$ = this.actions$.ofType(ADD_HOTEL_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.addHotel.warning);
    }),
    map(() => new GetHotels())
  );

  @Effect()
  deleteHotel$ = this.actions$.ofType(DELETE_HOTEL).pipe(
    switchMap((action: DeleteHotel) => {
      return this.hotelService
        .deleteHotel(action.payload)
        .pipe(map(res => new DeleteHotelSuccess(res)), catchError(error => of(new DeleteHotelFail(error))));
    })
  );

  @Effect()
  deleteHotelSuccess$ = this.actions$.ofType(DELETE_HOTEL_SUCCESS).pipe(
    map(() => new GetHotels()),
    map(() => {
      this.messagesService.success(messages.deleteHotel.success);
      return new Go({path: [`/hotels/`]});
    })
  );

  @Effect()
  deleteHotelFail$ = this.actions$.ofType(DELETE_HOTEL_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.deleteHotel.warning);
    }),
    map(() => new GetHotels())
  );

  @Effect()
  updateHotel$ = this.actions$.ofType(UPDATE_HOTEL).pipe(
    switchMap((action: UpdateHotel) => {
      return this.hotelService
        .updateHotel(action.payload)
        .pipe(map(res => new UpdateHotelSuccess(res)), catchError(error => of(new UpdateHotelFail(error))));
    })
  );

  @Effect()
  updateHotelSuccess$ = this.actions$.ofType(UPDATE_HOTEL_SUCCESS).pipe(
    map(() => new GetHotels()),
    map(() => {
      this.messagesService.success(messages.updateHotel.success);
      return new Go({path: [`/hotels/`]});
    })
  );

  @Effect()
  updateHotelFail$ = this.actions$.ofType(UPDATE_HOTEL_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.updateHotel.warning);
    }),
    map(() => new GetHotels())
  );
}

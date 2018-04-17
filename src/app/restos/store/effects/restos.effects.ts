import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {RestoService} from '../../service/resto.service';
import {
  GET_RESTOS,
  GetRestos,
  GetRestosFail,
  GetRestosSuccess,
  ADD_RESTO,
  AddResto,
  AddRestoSuccess,
  AddRestoFail,
  ADD_RESTO_SUCCESS,
  ADD_RESTO_FAIL,
  DELETE_RESTO,
  DeleteResto,
  DeleteRestoSuccess,
  DeleteRestoFail,
  DELETE_RESTO_SUCCESS,
  DELETE_RESTO_FAIL
} from '../actions/restos.actions';
import {MessagesService, messages} from '../../../core/services/messages.service';
import {Go} from '../../../core/store';

@Injectable()
export class RestosEffect {
  constructor(private actions$: Actions, private restoService: RestoService, private messagesService: MessagesService) {}

  @Effect()
  loadUserActivityLog$ = this.actions$.ofType(GET_RESTOS).pipe(
    switchMap((action: GetRestos) => {
      return this.restoService.getRestos().pipe(map(res => new GetRestosSuccess(res)), catchError(error => of(new GetRestosFail(error))));
    })
  );

  @Effect()
  addResto$ = this.actions$.ofType(ADD_RESTO).pipe(
    switchMap((action: AddResto) => {
      return this.restoService
        .addResto(action.payload)
        .pipe(map(res => new AddRestoSuccess(res)), catchError(error => of(new AddRestoFail(error))));
    })
  );

  @Effect()
  addRestoSuccess$ = this.actions$.ofType(ADD_RESTO_SUCCESS).pipe(
    map(() => new GetRestos()),
    map(() => {
      this.messagesService.success(messages.addResto.success);
      return new Go({path: [`/restos/`]});
    })
  );

  @Effect()
  addRestoFail$ = this.actions$.ofType(ADD_RESTO_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.addResto.warning);
    }),
    map(() => new GetRestos())
  );

  @Effect()
  deleteResto$ = this.actions$.ofType(DELETE_RESTO).pipe(
    switchMap((action: DeleteResto) => {
      return this.restoService
        .deleteResto(action.payload)
        .pipe(map(res => new DeleteRestoSuccess(res)), catchError(error => of(new DeleteRestoFail(error))));
    })
  );

  @Effect()
  deleteRestoSuccess$ = this.actions$.ofType(DELETE_RESTO_SUCCESS).pipe(
    map(() => new GetRestos()),
    map(() => {
      this.messagesService.success(messages.deleteResto.success);
      return new Go({path: [`/restos/`]});
    })
  );

  @Effect()
  deleteRestoFail$ = this.actions$.ofType(DELETE_RESTO_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.deleteResto.warning);
    }),
    map(() => new GetRestos())
  );
}

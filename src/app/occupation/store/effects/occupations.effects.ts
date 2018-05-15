import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {OccupationService} from '../../services/occupation.service';
import {
  GET_OCCUPATIONS,
  GetOccupations,
  GetOccupationsFail,
  GetOccupationsSuccess,
  ADD_OCCUPATION,
  AddOccupation,
  AddOccupationSuccess,
  AddOccupationFail,
  ADD_OCCUPATION_SUCCESS,
  ADD_OCCUPATION_FAIL,
  DELETE_OCCUPATION,
  DELETE_OCCUPATION_SUCCESS,
  DELETE_OCCUPATION_FAIL,
  DeleteOccupation,
  DeleteOccupationSuccess,
  DeleteOccupationFail,
  UPDATE_OCCUPATION,
  UPDATE_OCCUPATION_SUCCESS,
  UPDATE_OCCUPATION_FAIL,
  UpdateOccupation,
  UpdateOccupationSuccess,
  UpdateOccupationFail
} from '../actions/occupations.actions';
import {MessagesService, messages} from '../../../core/services/messages.service';
import {Go} from '../../../core/store';

@Injectable()
export class OccupationsEffect {
  constructor(private actions$: Actions, private occupationService: OccupationService, private messagesService: MessagesService) {}

  @Effect()
  getOccupations$ = this.actions$.ofType(GET_OCCUPATIONS).pipe(
    switchMap((action: GetOccupations) => {
      return this.occupationService
        .getOccupations()
        .pipe(map(res => new GetOccupationsSuccess(res)), catchError(error => of(new GetOccupationsFail(error))));
    })
  );

  @Effect()
  addOccupation$ = this.actions$.ofType(ADD_OCCUPATION).pipe(
    switchMap((action: AddOccupation) => {
      return this.occupationService
        .addOccupation(action.payload)
        .pipe(map(res => new AddOccupationSuccess(res)), catchError(error => of(new AddOccupationFail(error))));
    })
  );

  @Effect()
  addOccupationSuccess$ = this.actions$.ofType(ADD_OCCUPATION_SUCCESS).pipe(
    map(() => new GetOccupations()),
    map(() => {
      this.messagesService.success(messages.addOccupation.success);
      return new Go({path: [`/occupations/`]});
    })
  );

  @Effect()
  addOccupationFail$ = this.actions$.ofType(ADD_OCCUPATION_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.addOccupation.warning);
    }),
    map(() => new GetOccupations())
  );

  @Effect()
  deleteOccupation$ = this.actions$.ofType(DELETE_OCCUPATION).pipe(
    switchMap((action: DeleteOccupation) => {
      return this.occupationService
        .deleteOccupation(action.payload)
        .pipe(map(res => new DeleteOccupationSuccess(res)), catchError(error => of(new DeleteOccupationFail(error))));
    })
  );

  @Effect()
  deleteOccupationSuccess$ = this.actions$.ofType(DELETE_OCCUPATION_SUCCESS).pipe(
    map(() => new GetOccupations()),
    map(() => {
      this.messagesService.success(messages.deleteOccupation.success);
      return new Go({path: [`/occupations/`]});
    })
  );

  @Effect()
  deleteOccupationFail$ = this.actions$.ofType(DELETE_OCCUPATION_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.deleteOccupation.warning);
    }),
    map(() => new GetOccupations())
  );

  @Effect()
  updateOccupation$ = this.actions$.ofType(UPDATE_OCCUPATION).pipe(
    switchMap((action: UpdateOccupation) => {
      return this.occupationService
        .updateOccupation(action.payload)
        .pipe(map(res => new UpdateOccupationSuccess(res)), catchError(error => of(new UpdateOccupationFail(error))));
    })
  );

  @Effect()
  updateOccupationSuccess$ = this.actions$.ofType(UPDATE_OCCUPATION_SUCCESS).pipe(
    map(() => new GetOccupations()),
    map(() => {
      this.messagesService.success(messages.updateOccupation.success);
      return new Go({path: [`/occupations/`]});
    })
  );

  @Effect({dispatch: false})
  updateOccupationFail$ = this.actions$.ofType(UPDATE_OCCUPATION_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.updateOccupation.warning);
    }),
    map(() => new GetOccupations())
  );
}

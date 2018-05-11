import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {DegreeService} from '../../services/degree.service';
import {
  GET_DEGREES,
  GetDegrees,
  GetDegreesFail,
  GetDegreesSuccess,
  ADD_DEGREE,
  AddDegree,
  AddDegreeSuccess,
  AddDegreeFail,
  ADD_DEGREE_SUCCESS,
  ADD_DEGREE_FAIL,
  DELETE_DEGREE,
  DELETE_DEGREE_SUCCESS,
  DELETE_DEGREE_FAIL,
  DeleteDegree,
  DeleteDegreeSuccess,
  DeleteDegreeFail,
  UPDATE_DEGREE,
  UPDATE_DEGREE_SUCCESS,
  UPDATE_DEGREE_FAIL,
  UpdateDegree,
  UpdateDegreeSuccess,
  UpdateDegreeFail
} from '../actions/degrees.actions';
import {MessagesService, messages} from '../../../core/services/messages.service';
import {Go} from '../../../core/store';

@Injectable()
export class DegreesEffect {
  constructor(private actions$: Actions, private degreeService: DegreeService, private messagesService: MessagesService) {}

  @Effect()
  getDegrees$ = this.actions$.ofType(GET_DEGREES).pipe(
    switchMap((action: GetDegrees) => {
      return this.degreeService
        .getDegrees()
        .pipe(map(res => new GetDegreesSuccess(res)), catchError(error => of(new GetDegreesFail(error))));
    })
  );

  @Effect()
  addDegree$ = this.actions$.ofType(ADD_DEGREE).pipe(
    switchMap((action: AddDegree) => {
      return this.degreeService
        .addDegree(action.payload)
        .pipe(map(res => new AddDegreeSuccess(res)), catchError(error => of(new AddDegreeFail(error))));
    })
  );

  @Effect()
  addDegreeSuccess$ = this.actions$.ofType(ADD_DEGREE_SUCCESS).pipe(
    map(() => new GetDegrees()),
    map(() => {
      this.messagesService.success(messages.addDegree.success);
      return new Go({path: [`/degrees/`]});
    })
  );

  @Effect()
  addDegreeFail$ = this.actions$.ofType(ADD_DEGREE_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.addDegree.warning);
    }),
    map(() => new GetDegrees())
  );

  @Effect()
  deleteDegree$ = this.actions$.ofType(DELETE_DEGREE).pipe(
    switchMap((action: DeleteDegree) => {
      return this.degreeService
        .deleteDegree(action.payload)
        .pipe(map(res => new DeleteDegreeSuccess(res)), catchError(error => of(new DeleteDegreeFail(error))));
    })
  );

  @Effect()
  deleteDegreeSuccess$ = this.actions$.ofType(DELETE_DEGREE_SUCCESS).pipe(
    map(() => new GetDegrees()),
    map(() => {
      this.messagesService.success(messages.deleteDegree.success);
      return new Go({path: [`/degrees/`]});
    })
  );

  @Effect()
  deleteDegreeFail$ = this.actions$.ofType(DELETE_DEGREE_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.deleteDegree.warning);
    }),
    map(() => new GetDegrees())
  );

  @Effect()
  updateDegree$ = this.actions$.ofType(UPDATE_DEGREE).pipe(
    switchMap((action: UpdateDegree) => {
      return this.degreeService
        .updateDegree(action.payload)
        .pipe(map(res => new UpdateDegreeSuccess(res)), catchError(error => of(new UpdateDegreeFail(error))));
    })
  );

  @Effect()
  updateDegreeSuccess$ = this.actions$.ofType(UPDATE_DEGREE_SUCCESS).pipe(
    map(() => new GetDegrees()),
    map(() => {
      this.messagesService.success(messages.updateDegree.success);
      return new Go({path: [`/degrees/`]});
    })
  );

  @Effect()
  updateDegreeFail$ = this.actions$.ofType(UPDATE_DEGREE_FAIL).pipe(
    map(() => {
      this.messagesService.warn(messages.updateDegree.warning);
    }),
    map(() => new GetDegrees())
  );
}

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {DegreeService} from '../../services/degree.service';
import {GET_DEGREES, GetDegrees, GetDegreesFail, GetDegreesSuccess} from '../actions/degrees.actions';

@Injectable()
export class DegreesEffect {
  constructor(private actions$: Actions, private degreeService: DegreeService) {}

  @Effect()
  getDegrees$ = this.actions$.ofType(GET_DEGREES).pipe(
    switchMap((action: GetDegrees) => {
      return this.degreeService
        .getDegrees()
        .pipe(map(res => new GetDegreesSuccess(res)), catchError(error => of(new GetDegreesFail(error))));
    })
  );
}

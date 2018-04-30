import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {OccupationService} from '../../services/occupation.service';
import {GET_OCCUPATIONS, GetOccupations, GetOccupationsFail, GetOccupationsSuccess} from '../actions/occupations.actions';

@Injectable()
export class OccupationsEffect {
  constructor(private actions$: Actions, private occupationService: OccupationService) {}

  @Effect()
  getOccupations$ = this.actions$.ofType(GET_OCCUPATIONS).pipe(
    switchMap((action: GetOccupations) => {
      return this.occupationService
        .getOccupations()
        .pipe(map(res => new GetOccupationsSuccess(res)), catchError(error => of(new GetOccupationsFail(error))));
    })
  );
}

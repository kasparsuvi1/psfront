import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {RestoService} from '../../service/resto.service';
import {GET_RESTOS, GetRestos, GetRestosFail, GetRestosSuccess} from '../actions/restos.actions';

@Injectable()
export class RestosEffect {
  constructor(private actions$: Actions, private restoService: RestoService) {}

  @Effect()
  loadUserActivityLog$ = this.actions$.ofType(GET_RESTOS).pipe(
    switchMap((action: GetRestos) => {
      return this.restoService.getRestos().pipe(map(res => new GetRestosSuccess(res)), catchError(error => of(new GetRestosFail(error))));
    })
  );
}

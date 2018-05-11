import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {RestoService} from '../../services/resto.service';
import {GET_RESTOS, GetRestos, GetRestosFail, GetRestosSuccess} from '../actions/restos.actions';
import {Go} from '../../../core/store';

@Injectable()
export class RestosEffect {
  constructor(private actions$: Actions, private restoService: RestoService) {}

  @Effect()
  getRestos$ = this.actions$.ofType(GET_RESTOS).pipe(
    switchMap((action: GetRestos) => {
      return this.restoService.getRestos().pipe(map(res => new GetRestosSuccess(res)), catchError(error => of(new GetRestosFail(error))));
    })
  );
}

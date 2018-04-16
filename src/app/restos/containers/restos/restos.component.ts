import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {getRestos} from '../../store/selectors';
import {GetRestos} from '../../store/actions';
import {RestosViewState} from '../../store/reducers';

@Component({
  selector: 'app-restos',
  template: `
    <div class="card">
      <div class="card__title">
        <h2 class="mat-title">Restos</h2>
        <button
          class="btn btn--inline"
          mat-raised-button
          routerLink="/restos/new">
          Add new Resto
        </button>
      </div>
    </div>

    <app-table
      [data]="$restos | async | dataSource"
      [columns]="columns"
      [paginator]="true"
      [filter]="{filterString: 'Filter restos'}"
      [clickable]="true"
      path="restos/">
    </app-table>
  `,
  styleUrls: ['./restos.component.scss']
})
export class RestosComponent implements OnInit {
  $restos: Observable<Resto[]>;

  columns = [
    {columnDef: 'name', header: 'Resto name', cell: row => `${row.name}`},
    {columnDef: 'country', header: 'Country', cell: row => `${row.country}`},
    {columnDef: 'city', header: 'City', cell: row => `${row.city}`},
    {columnDef: 'webpage', header: 'Webpage', cell: row => `${row.webpage}`}
  ];
  constructor(private store: Store<RestosViewState>) {}

  ngOnInit() {
    this.$restos = this.store.select(getRestos);
    this.store.dispatch(new GetRestos());
  }
}

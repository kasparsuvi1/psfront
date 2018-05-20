import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {getRestos, getRestosLoading, getRestosLoaded} from '../../store/selectors';
import {GetRestos} from '../../store/actions';
import {RestosViewState} from '../../store/reducers';

@Component({
  selector: 'app-restos',
  template: `
    <div class="card">
      <div class="card__title">
        <h2 class="mat-title">Restaurant</h2>
        <button
          class="btn btn--inline"
          mat-raised-button
          routerLink="/restos/new">
          Add a new Restaurant
        </button>
      </div>
    </div>

    <app-table
      [data]="$restos | async | dataSource"
      [columns]="columns"
      [paginator]="true"
      [filter]="{filterString: 'Filter restaurants'}"
      [clickable]="true"
      [loading]="$restosLoading | async"
      [loaded]="$restosLoaded | async"
      path="restos/">
    </app-table>
  `,
  styleUrls: ['./restos.component.scss']
})
export class RestosComponent implements OnInit {
  $restos: Observable<Resto[]>;
  $restosLoading: Observable<Boolean>;
  $restosLoaded: Observable<Boolean>;

  columns = [
    {columnDef: 'name', header: 'Restaurant name', cell: row => `${row.name}`},
    {columnDef: 'hotelName', header: 'Hotel name', cell: row => `${row}`},
    {columnDef: 'country', header: 'Country', cell: row => `${row.country}`},
    {columnDef: 'city', header: 'City', cell: row => `${row.city}`},
    {columnDef: 'webpage', header: 'Webpage', cell: row => `${row.webpage}`}
  ];
  constructor(private store: Store<RestosViewState>) {}

  ngOnInit() {
    this.$restos = this.store.select(getRestos);
    this.store.dispatch(new GetRestos());

    this.$restosLoaded = this.store.select(getRestosLoaded);
    this.$restosLoading = this.store.select(getRestosLoading);
  }
}

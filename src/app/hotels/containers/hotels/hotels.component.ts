import {Component, OnInit} from '@angular/core';
import {Store, createSelector} from '@ngrx/store';
import {Observable} from 'rxjs';

import {HotelsViewState, getHotelsViewsState} from '../../store/reducers';
import {getHotels, getHotelsLoading, getHotelsLoaded} from '../../store/selectors';
import {GetHotels} from '../../store/actions';
import {HotelsState} from '../../store/reducers/hotels.reducers';

@Component({
  selector: 'app-hotels',
  template: `
  <div class="card">
    <div class="card__title">
      <h2 class="mat-title">Hotels</h2>
      <button
        class="btn btn--inline"
        mat-raised-button
        routerLink="/hotels/new">
        Add new hotel
      </button>
    </div>
  </div>

  <app-table
    [data]="$hotels | async | dataSource"
    [columns]="columns"
    [paginator]="true"
    [filter]="{filterString: 'Filter hotels'}"
    [clickable]="true"
    [loading]="$hotelsLoading | async"
    [loaded]="$hotelsLoaded | async"
    path="hotels/">
  </app-table>
  `,
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  $hotels: Observable<Hotel[]>;
  $hotelsLoading: Observable<Boolean>;
  $hotelsLoaded: Observable<Boolean>;

  columns = [
    {columnDef: 'name', header: 'Hotel name', cell: row => `${row.name}`},
    {columnDef: 'country', header: 'Country', cell: row => `${row.country}`},
    {columnDef: 'city', header: 'City', cell: row => `${row.city}`},
    {columnDef: 'webpage', header: 'Webpage', cell: row => `${row.webpage}`}
  ];
  constructor(private store: Store<HotelsViewState>) {}

  ngOnInit() {
    this.$hotels = this.store.select(getHotels);
    this.store.dispatch(new GetHotels());

    this.$hotelsLoading = this.store.select(getHotelsLoading);
    this.$hotelsLoaded = this.store.select(getHotelsLoaded);
  }
}

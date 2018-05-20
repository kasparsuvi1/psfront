import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {OccupationsViewState} from '../../store/reducers';
import {getOccupations, getOccupationsLoading, getOccupationsLoaded} from '../../store/selectors';
import {GetOccupations} from '../../store/actions';

@Component({
  selector: 'app-occupations',
  template: `
    <div class="card">
      <div class="card__title">
        <h2 class="mat-title">Occupations</h2>
        <button
          class="btn btn--inline"
          mat-raised-button
          routerLink="/occupations/new">
          Add new occupation
        </button>
      </div>
    </div>

    <app-table
      [data]="$occupations | async | dataSource"
      [columns]="columns"
      [paginator]="true"
      [filter]="{filterString: 'Filter occupations'}"
      [clickable]="true"
      [loading]="$occupationsLoading | async"
      [loaded]="$occupationsLoaded | async"
      path="occupations/">
    </app-table>

  `,
  styleUrls: ['./occupations.component.scss']
})
export class OccupationsComponent implements OnInit {
  $occupations: Observable<Occupation[]>;
  $occupationsLoading: Observable<Boolean>;
  $occupationsLoaded: Observable<Boolean>;

  columns = [
    {columnDef: 'id', header: 'ID', cell: row => `${row.id}`},
    {columnDef: 'name', header: 'Name', cell: row => `${row.name}`},
    {columnDef: 'description', header: 'Description', cell: row => `${row.description}`}
  ];
  constructor(private store: Store<OccupationsViewState>) {}

  ngOnInit() {
    this.$occupations = this.store.select(getOccupations);
    this.store.dispatch(new GetOccupations());

    this.$occupationsLoaded = this.store.select(getOccupationsLoaded);
    this.$occupationsLoading = this.store.select(getOccupationsLoading);
  }
}

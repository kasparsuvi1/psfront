import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {DegreesViewState} from '../../store/reducers';
import {getDegrees} from '../../store/selectors';
import {GetDegrees} from '../../store/actions';

@Component({
  selector: 'app-degrees',
  template: `
    <div class="card">
      <div class="card__title">
        <h2 class="mat-title">Degrees</h2>
        <button
          class="btn btn--inline"
          mat-raised-button
          routerLink="/degrees/new">
          Add new degree
        </button>
      </div>
    </div>

    <app-table
      [data]="$degrees | async | dataSource"
      [columns]="columns"
      [paginator]="true"
      [filter]="{filterString: 'Filter degrees'}"
      [clickable]="true"
      path="degrees/">
    </app-table>

  `,
  styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent implements OnInit {
  $degrees: Observable<Degree[]>;

  columns = [
    {columnDef: 'id', header: 'ID', cell: row => `${row.id}`},
    {columnDef: 'name', header: 'Name', cell: row => `${row.name}`},
    {columnDef: 'description', header: 'Description', cell: row => `${row.description}`}
  ];
  constructor(private store: Store<DegreesViewState>) {}

  ngOnInit() {
    this.$degrees = this.store.select(getDegrees);
    this.store.dispatch(new GetDegrees());
  }
}

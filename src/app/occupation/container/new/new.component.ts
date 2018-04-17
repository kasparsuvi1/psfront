import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {OccupationsViewState} from '../../store/reducers';
import {AddOccupation} from '../../store/actions';

@Component({
  selector: 'app-new',
  template: `
  <div class="card">
    <div class="card__title">
      <h2 class="mat-title">Add new occupation</h2>
    </div>
    <div class="card__content">
      <app-occupation-form (add)="addOccupation($event)">
      </app-occupation-form>
    </div>
  </div>
  `,
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  constructor(private store: Store<OccupationsViewState>) {}

  ngOnInit() {}

  addOccupation(payload) {
    this.store.dispatch(new AddOccupation(payload));
  }
}

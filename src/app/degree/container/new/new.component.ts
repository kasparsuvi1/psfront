import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {DegreesViewState} from '../../store/reducers';
import {AddDegree} from '../../store/actions';

@Component({
  selector: 'app-new',
  template: `
    <div class="card">
      <div class="card__title">
        <h2 class="mat-title">Add new degree</h2>
      </div>
      <div class="card__content">
        <app-degree-form (add)="addDegree($event)">
        </app-degree-form>
      </div>
    </div>
  `,
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  constructor(private store: Store<DegreesViewState>) {}

  ngOnInit() {}

  addDegree(payload) {
    this.store.dispatch(new AddDegree(payload));
  }
}

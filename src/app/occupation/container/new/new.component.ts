import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {OccupationsViewState} from '../../store/reducers';
import {AddOccupation} from '../../store/actions';

@Component({
  selector: 'app-new',
  template: `
    <app-occupation-form (add)="addOccupation($event)">
    </app-occupation-form>
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

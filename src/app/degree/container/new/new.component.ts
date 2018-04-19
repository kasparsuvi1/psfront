import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {DegreesViewState} from '../../store/reducers';
import {AddDegree} from '../../store/actions';

@Component({
  selector: 'app-new',
  template: `
      <app-degree-form (add)="addDegree($event)">
      </app-degree-form>
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

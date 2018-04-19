import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {HotelsViewState} from '../../store/reducers';
import {AddHotel} from '../../store/actions';

@Component({
  selector: 'app-new',
  template: `
    <app-hotels-form (add)="addHotel($event)">
    </app-hotels-form>
  `,
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  constructor(private store: Store<HotelsViewState>) {}

  ngOnInit() {}

  addHotel(payload) {
    this.store.dispatch(new AddHotel(payload));
  }
}

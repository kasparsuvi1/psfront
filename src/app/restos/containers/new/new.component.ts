import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {RestosViewState} from '../../store/reducers';
import {AddResto, GetHotels} from '../../store/actions';
import {getHotels} from '../../store/selectors';

@Component({
  selector: 'app-new',
  template: `
    <app-resto-form [hotels]="$hotels | async"
                    (add)="addResto($event)">
    </app-resto-form>
  `,
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  $hotels: Observable<Hotel[]>;

  constructor(private store: Store<RestosViewState>) {}

  ngOnInit() {
    this.$hotels = this.store.select(getHotels);
    this.store.dispatch(new GetHotels());
  }

  addResto(payload) {
    this.store.dispatch(new AddResto(payload));
  }
}

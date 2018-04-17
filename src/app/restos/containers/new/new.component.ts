import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {RestosViewState} from '../../store/reducers';
import {AddResto, GetHotels} from '../../store/actions';
import {getHotels} from '../../store/selectors';

@Component({
  selector: 'app-new',
  template: `
  <div class="card">
    <div class="card__title">
      <h2 class="mat-title">Add new resto</h2>
    </div>
    <div class="card__content">
      <app-resto-form [hotels]="$hotels | async"
                      (add)="addResto($event)">
      </app-resto-form>
    </div>
  </div>

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

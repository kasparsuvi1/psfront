import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AdvertsViewState} from '../../store/reducers';
import {getAdverts, getFilteredAdverts} from '../../store/selectors';
import {GetAdverts, GetHotels, SetAdvertFilter, AddResponse} from '../../store/actions';
import {getHotels} from '../../store/selectors/hotels.selectors';

@Component({
  selector: 'app-adverts',
  template: `
  <div class="container">
    <mat-form-field >
      <mat-select [value]="''" (selectionChange)="filterChange($event)">
        <mat-option [value]="''">
          Every Hotel
        </mat-option>
        <mat-option
          *ngFor="let hotel of $hotels | async"
          [value]="hotel.id">
          {{ hotel.name }}
        </mat-option>
      </mat-select>
    </mat-form-field>

    <app-advert *ngFor="let advert of $adverts | async"
                [advert]="advert"
                (addResponse)="addResponse($event)">
    </app-advert>
  </div>

  `,
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent implements OnInit {
  $adverts: Observable<Advert[]>;
  $hotels: Observable<Hotel[]>;

  constructor(private store: Store<AdvertsViewState>) {}

  ngOnInit() {
    this.$adverts = this.store.select(getFilteredAdverts);
    this.store.dispatch(new GetAdverts());

    this.$hotels = this.store.select(getHotels);
    this.store.dispatch(new GetHotels());
  }

  filterChange(event) {
    this.store.dispatch(new SetAdvertFilter({hotel: event.value}));
  }

  addResponse(event) {
    this.store.dispatch(new AddResponse(event));
  }
}

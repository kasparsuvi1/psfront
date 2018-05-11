import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AdvertsViewState} from '../../store/reducers';
import {getAdverts} from '../../store/selectors';
import {GetAdverts, GetHotels} from '../../store/actions';
import {getHotels} from '../../store/selectors/hotels.selectors';

@Component({
  selector: 'app-adverts',
  template: `
    <mat-form-field >
      <mat-select [value]="''">
        <mat-option [value]="''" (onSelectionChange)="statusChange($event)">
          Kõik
        </mat-option>
        <mat-option
          *ngFor="let hotel of $hotels | async"
          [value]="hotel.name"
          (onSelectionChange)="statusChange($event)">
          {{ hotel.name }}
        </mat-option>
      </mat-select>
    </mat-form-field>

    <app-advert *ngFor="let advert of $adverts | async"
                [advert]="advert">
    </app-advert>

  `,
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent implements OnInit {
  $adverts: Observable<Advert[]>;
  $hotels: Observable<Hotel[]>;

  constructor(private store: Store<AdvertsViewState>) {}

  ngOnInit() {
    this.$adverts = this.store.select(getAdverts);
    this.store.dispatch(new GetAdverts());

    this.$hotels = this.store.select(getHotels);
    this.store.dispatch(new GetHotels());
  }

  statusChange() {}
}

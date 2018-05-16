import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AdvertsViewState} from '../../store/reducers';
import {getAdverts, getFilteredAdverts} from '../../store/selectors';
import {GetAdverts, GetHotels, SetAdvertFilter, AddResponse} from '../../store/actions';
import {getHotels} from '../../store/selectors/hotels.selectors';
import {GetOccupations, GetDegrees} from '../../../core/store';
import {getOccupations} from '../../../core/store/selectors/occupations.selectors';
import {getDegrees} from '../../../core/store/selectors/degrees.selectors';

@Component({
  selector: 'app-adverts',
  template: `
  <div class="container">
    <mat-form-field class="form__field">
      <mat-select [value]="''" (selectionChange)="hotelChange($event)">
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

    <mat-form-field class="form__field">
      <mat-select [value]="''" (selectionChange)="occupationChange($event)">
        <mat-option [value]="''">
          Every occupation
        </mat-option>
        <mat-option
          *ngFor="let occupation of $occupations | async"
          [value]="occupation.id">
          {{ occupation.name }}
        </mat-option>
      </mat-select>
    </mat-form-field>

    <mat-form-field class="form__field">
      <mat-select [value]="''" (selectionChange)="degreeChange($event)">
        <mat-option [value]="''">
          Every degree
        </mat-option>
        <mat-option
          *ngFor="let degree of $degrees | async"
          [value]="degree.id">
          {{ degree.name }}
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
  $occupations: Observable<Occupation[]>;
  $degrees: Observable<Degree[]>;
  filters: {hotel?: number; occupation?: number; degree?: number};

  constructor(private store: Store<AdvertsViewState>) {}

  ngOnInit() {
    this.$adverts = this.store.select(getFilteredAdverts);
    this.store.dispatch(new GetAdverts());

    this.$hotels = this.store.select(getHotels);
    this.store.dispatch(new GetHotels());

    this.$occupations = this.store.select(getOccupations);
    this.store.dispatch(new GetOccupations());

    this.$degrees = this.store.select(getDegrees);
    this.store.dispatch(new GetDegrees());

    this.filters = {hotel: null, occupation: null, degree: null};
  }

  setFilters() {
    this.store.dispatch(new SetAdvertFilter(this.filters));
  }

  addResponse(event) {
    this.store.dispatch(new AddResponse(event));
  }

  degreeChange(event) {
    this.filters = {...this.filters, degree: event.value};
    this.setFilters();
  }

  occupationChange(event) {
    this.filters = {...this.filters, occupation: event.value};
    this.setFilters();
  }

  hotelChange(event) {
    this.filters = {...this.filters, hotel: event.value};
    this.setFilters();
  }
}

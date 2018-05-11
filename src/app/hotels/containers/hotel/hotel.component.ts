import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {HotelsViewState} from '../../store/reducers';
import {getSelectedHotel} from '../../store/selectors';
import {GetHotels, DeleteHotel, UpdateHotel} from '../../store/actions';

@Component({
  selector: 'app-hotel',
  template: `

  <app-hotels-form  [hotel]="hotel"
                    (save)="saveHotel($event)"
                    (delete)="deleteHotel()">
  </app-hotels-form>

    <app-table
      [data]="restos | dataSource"
      [columns]="restoColumns"
      [paginator]="true"
      [filter]="{filterString: 'Filter restos'}"
      [clickable]="true"
      path="restos/">
    </app-table>


  `,
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit, OnDestroy {
  hotel: Hotel = {} as Hotel;
  restos: Resto[];
  editHotel = false;

  $hotel: Subscription;

  restoColumns = [
    {columnDef: 'name', header: 'Resto name', cell: row => `${row.name}`},
    {columnDef: 'hotel', header: 'Hotel name', cell: row => `${this.hotel.name}`},
    {columnDef: 'country', header: 'Country', cell: row => `${row.country}`},
    {columnDef: 'city', header: 'City', cell: row => `${row.city}`},
    {columnDef: 'webpage', header: 'Webpage', cell: row => `${row.webpage}`}
  ];

  constructor(private store: Store<HotelsViewState>) {}

  ngOnInit() {
    this.$hotel = this.store.select(getSelectedHotel).subscribe(res => {
      this.hotel = res as Hotel;
      if (res && res.restos) {
        this.restos = res.restos as Resto[];
      }
    });
    this.store.dispatch(new GetHotels());
  }

  ngOnDestroy() {
    this.$hotel.unsubscribe();
  }

  deleteHotel() {
    this.store.dispatch(new DeleteHotel(this.hotel.id));
  }

  saveHotel(event) {
    this.store.dispatch(new UpdateHotel(event));
  }
}

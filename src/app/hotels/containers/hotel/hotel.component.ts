import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';
import {HotelsViewState} from '../../store/reducers';
import {getSelectedHotel} from '../../store/selectors';
import {GetHotels, DeleteHotel} from '../../store/actions';

@Component({
  selector: 'app-hotel',
  template: `
    <p>
      hotel works!

      {{hotel | json}}
    </p>

    <button class="btn" color="warn" type="button" mat-raised-button (click)="deleteHotel()">
      Delete
    </button>


  `,
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit, OnDestroy {
  hotel: Hotel = {} as Hotel;
  editHotel = false;

  $hotel: Subscription;

  constructor(private store: Store<HotelsViewState>) {}

  ngOnInit() {
    this.$hotel = this.store.select(getSelectedHotel).subscribe(res => {
      this.hotel = res as Hotel;
    });
    this.store.dispatch(new GetHotels());
  }

  ngOnDestroy() {
    this.$hotel.unsubscribe();
  }

  deleteHotel() {
    this.store.dispatch(new DeleteHotel(this.hotel.id));
  }
}

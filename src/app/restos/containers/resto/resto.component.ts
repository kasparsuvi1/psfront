import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';
import {RestosViewState} from '../../store/reducers';
import {getSelectedResto, getHotels} from '../../store/selectors';
import {GetRestos, DeleteResto, GetHotels, UpdateResto} from '../../store/actions';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-resto',
  template: `
    <app-resto-form   [resto]="resto"
                      [hotels]="$hotels | async"
                      (save)="saveResto($event)"
                      (delete)="deleteResto()">
    </app-resto-form>

  `,
  styleUrls: ['./resto.component.scss']
})
export class RestoComponent implements OnInit, OnDestroy {
  resto: Resto = {} as Resto;
  editResto = false;

  $hotels: Observable<Hotel[]>;
  $resto: Subscription;

  constructor(private store: Store<RestosViewState>) {}

  ngOnInit() {
    this.$resto = this.store.select(getSelectedResto).subscribe(res => {
      this.resto = res as Resto;
    });
    this.store.dispatch(new GetRestos());

    this.$hotels = this.store.select(getHotels);
    this.store.dispatch(new GetHotels());
  }

  ngOnDestroy() {
    this.$resto.unsubscribe();
  }

  deleteResto() {
    this.store.dispatch(new DeleteResto(this.resto.id));
  }

  saveResto(event) {
    this.store.dispatch(new UpdateResto(event));
  }
}

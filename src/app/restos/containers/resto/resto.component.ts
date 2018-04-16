import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';
import {RestosViewState} from '../../store/reducers';
import {getSelectedResto} from '../../store/selectors';
import {GetRestos} from '../../store/actions';

@Component({
  selector: 'app-resto',
  template: `
    <p>
      resto works!
      {{resto | json}}
    </p>
  `,
  styleUrls: ['./resto.component.scss']
})
export class RestoComponent implements OnInit, OnDestroy {
  resto: Resto = {} as Resto;
  editResto = false;

  $resto: Subscription;

  constructor(private store: Store<RestosViewState>) {}

  ngOnInit() {
    this.$resto = this.store.select(getSelectedResto).subscribe(res => {
      this.resto = res as Resto;
    });
    this.store.dispatch(new GetRestos());
  }

  ngOnDestroy() {
    this.$resto.unsubscribe();
  }
}

import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';
import {OccupationsViewState} from '../../store/reducers';
import {getSelectedOccupation} from '../../store/selectors';
import {GetOccupations} from '../../store/actions';

@Component({
  selector: 'app-occupation',
  template: `
    <p>
      occupation works!
      {{occupation | json}}
    </p>
  `,
  styleUrls: ['./occupation.component.scss']
})
export class OccupationComponent implements OnInit, OnDestroy {
  occupation: Occupation = {} as Occupation;
  editOccupation = false;

  $occupation: Subscription;

  constructor(private store: Store<OccupationsViewState>) {}

  ngOnInit() {
    this.$occupation = this.store.select(getSelectedOccupation).subscribe(res => {
      this.occupation = res as Occupation;
    });
    this.store.dispatch(new GetOccupations());
  }

  ngOnDestroy() {
    this.$occupation.unsubscribe();
  }
}

import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';
import {OccupationsViewState} from '../../store/reducers';
import {getSelectedOccupation} from '../../store/selectors';
import {GetOccupations, DeleteOccupation, UpdateOccupation} from '../../store/actions';

@Component({
  selector: 'app-occupation',
  template: `
    <app-occupation-form  [occupation]="occupation"
                      (save)="saveOccupation($event)"
                      (delete)="deleteOccupation()">
    </app-occupation-form>


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

  saveOccupation(event) {
    this.store.dispatch(new UpdateOccupation(event));
  }

  deleteOccupation() {
    this.store.dispatch(new DeleteOccupation(this.occupation.id));
  }
}

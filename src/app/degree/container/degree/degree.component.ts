import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';
import {DegreesViewState} from '../../store/reducers';
import {getSelectedDegree} from '../../store/selectors';
import {GetDegrees, DeleteDegree, UpdateDegree} from '../../store/actions';

@Component({
  selector: 'app-degree',
  template: `
    <app-degree-form  [degree]="degree"
                      (save)="saveDegree($event)"
                      (delete)="deleteDegree()">
    </app-degree-form>

  `,
  styleUrls: ['./degree.component.scss']
})
export class DegreeComponent implements OnInit, OnDestroy {
  degree: Degree = {} as Degree;
  editDegree = false;

  $degree: Subscription;

  constructor(private store: Store<DegreesViewState>) {}

  ngOnInit() {
    this.$degree = this.store.select(getSelectedDegree).subscribe(res => {
      this.degree = res as Degree;
    });
    this.store.dispatch(new GetDegrees());
  }

  ngOnDestroy() {
    this.$degree.unsubscribe();
  }

  deleteDegree() {
    this.store.dispatch(new DeleteDegree(this.degree.id));
  }

  saveDegree(event) {
    this.store.dispatch(new UpdateDegree(event));
  }
}

import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AdminViewState} from '../../store/reducers';
import {getUsersState, getUsers} from '../../store/selectors';
import {GetUsers} from '../../store/actions';

@Component({
  selector: 'app-admin',
  template: `

      <app-stastics [users]="$users | async">
      </app-stastics>
  `,
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  $users;

  constructor(private store: Store<AdminViewState>) {}

  ngOnInit() {
    this.$users = this.store.select(getUsers);
    this.store.dispatch(new GetUsers());
  }
}

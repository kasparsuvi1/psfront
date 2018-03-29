import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AdminViewState} from '../../store/reducers';
import {getUsersState} from '../../store/selectors';
import {GetUsers} from '../../store/actions';

@Component({
  selector: 'app-admin',
  template: `
    Admin works
    {{ $users | async | json}}
  `,
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  $users;

  constructor(private store: Store<AdminViewState>) {}

  ngOnInit() {
    this.$users = this.store.select(getUsersState);
    this.store.dispatch(new GetUsers());
  }
}

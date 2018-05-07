import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {RouterModule, Routes} from '@angular/router';
import {State, GetUserAdverts, GetUserResponses} from '../../../core/store';
import {getUserAdverts} from '../../../core/store/selectors/adverts.selectors';
import {getUserResponses} from '../../../core/store/selectors/responses.selectors';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="header">
    </div>
    <div class="wrapper">
      <!-- User Adverts -->
      <app-adverts [adverts]="$userAdverts | async"></app-adverts>
      <!-- User Responses -->
      <app-responses [responses]="$userResponses | async"></app-responses>
    </div>
    <!-- {{$userAdverts | async | json}}
    <hr>
    {{$userResponses | async | json}} -->

  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  $userAdverts: Observable<Advert[]>;
  $userResponses: Observable<Response[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.$userAdverts = this.store.select(getUserAdverts);
    this.store.dispatch(new GetUserAdverts());

    this.$userResponses = this.store.select(getUserResponses);
    this.store.dispatch(new GetUserResponses());
  }
}

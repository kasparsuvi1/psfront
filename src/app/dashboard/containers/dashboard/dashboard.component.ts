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
    <p>
      Siin on kasutaja juba sisse logitud! ja näeb oma infot.
    </p>

    {{$userAdverts | async | json}}
    {{$userResponses | async | json}}

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

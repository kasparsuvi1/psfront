import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {RouterModule, Routes} from '@angular/router';
import {
  State,
  GetUserAdverts,
  GetUserResponses,
  DeclineResponse,
  AcceptResponse,
  getAccountData,
  WhoAmI,
  DeleteResponse,
  DeleteAdvert
} from '../../../core/store';
import {getUserAdverts} from '../../../core/store/selectors/adverts.selectors';
import {getUserResponses} from '../../../core/store/selectors/responses.selectors';
import {AccountModel} from '../../../core/models/account.models';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="header">
    </div>
    <div class="wrapper">
      <!-- User Adverts -->
      <app-adverts  [adverts]="$userAdverts | async"
                    (accept)="acceptResponse($event)"
                    (decline)="declineResponse($event)"
                    (delete)="deleteAdvert($event)"></app-adverts>

      <!-- User Responses -->
      <app-responses [responses]="$userResponses | async"></app-responses>
    </div>

  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  $userAdverts: Observable<Advert[]>;
  $userResponses: Observable<Response[]>;
  $accountSubscription: Subscription;
  account: AccountModel;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.$userAdverts = this.store.select(getUserAdverts);
    this.store.dispatch(new GetUserAdverts());

    this.$userResponses = this.store.select(getUserResponses);
    this.store.dispatch(new GetUserResponses());

    this.$accountSubscription = this.store.select(getAccountData).subscribe(res => {
      this.account = res as AccountModel;
    });

    if (this.account.userId) {
      this.store.dispatch(new WhoAmI(this.account.userId));
    }
  }

  declineResponse(payload) {
    this.store.dispatch(new DeclineResponse(payload));
  }

  acceptResponse(payload) {
    this.store.dispatch(new AcceptResponse(payload));
  }

  deleteAdvert(payload) {
    this.store.dispatch(new DeleteAdvert(payload));
  }
}

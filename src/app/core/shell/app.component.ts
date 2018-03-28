import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Store} from '@ngrx/store';
import {State} from '../store';
import * as accountActions from '../../core/store/actions/account.actions';
import {Observable} from 'rxjs/Observable';
import {AccountModel} from '../models/account.models';
import {getAccountData} from '../store/selectors';
import {routes} from '../core-routing.module';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="$account | async as account">
      <mat-toolbar color="primary" *ngIf="account.authenticated">
        <ng-container *ngFor="let route of routes">
          <button class="btn-toolbar" mat-button
                  [routerLink]="['/' + route.path]"
                  routerLinkActive="btn-toolbar--active"
                  *ngIf="isRouteAvailable(route, account.roles)">
            {{route.data.title}}
          </button>
        </ng-container>

        <span class="fill-space"></span>

        <button class="btn-toolbar" mat-button>
          <mat-icon class="material-icons">account_circle</mat-icon>
          {{account?.user_name}}
        </button>
        <button class="btn-toolbar" mat-button (click)="logout()">
          <mat-icon class="material-icons">cancel</mat-icon>
          Logi välja
        </button>
      </mat-toolbar>
    </div>
    <div class="app-wrapper">
      <app-message></app-message>
      <router-outlet></router-outlet>
    </div>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  $account: Observable<AccountModel>;

  routes = routes;

  constructor(private authService: AuthenticationService, private store: Store<State>) {}

  ngOnInit() {
    this.$account = this.store.select(getAccountData);
  }

  isRouteAvailable(route: any, roles: any) {
    if (!route || !route.data || !route.data.expectedRoles) {
      return;
    }
    return roles.some(role => route.data.expectedRoles.includes(role));
  }

  logout() {
    this.store.dispatch(new accountActions.Logout());
  }
}

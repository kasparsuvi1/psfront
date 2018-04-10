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
        <button mat-button [mat-menu-trigger-for]="menu" fxHide="false" fxHide.gt-sm>
          <mat-icon>menu</mat-icon>
        </button>

        <div fxLayout="row" fxShow="false" fxShow.gt-sm>
          <ng-container *ngFor="let route of routes">
            <button mat-button
                    [routerLink]="['/' + route.path]"
                    routerLinkActive="btn-toolbar--active"
                    *ngIf="isRouteAvailable(route, account.roles)">
              {{route.data.title}}
            </button>
          </ng-container>
        </div>

        <span class="fill-space"></span>

        <div fxLayout="row" fxShow="false" fxShow.gt-sm>
          <button mat-button>
            <mat-icon class="material-icons">account_circle</mat-icon>
            {{account?.user_name}}
          </button>
        </div>
        <button mat-button (click)="logout()">
          Logi välja
        </button>

      </mat-toolbar>
      <mat-menu x-position="before" #menu="matMenu">
        <ng-container *ngFor="let route of routes">
          <button class="menu-item"
                  mat-menu-item
                  [routerLink]="['/' + route.path]"
                  *ngIf="isRouteAvailable(route, account.roles)">
            {{route.data.title}}
          </button>
        </ng-container>
        <button mat-menu-item>
          Profile
        </button>

      </mat-menu>
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

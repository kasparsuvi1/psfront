import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Store} from '@ngrx/store';
import {State, WhoAmI} from '../store';
import * as accountActions from '../../core/store/actions/account.actions';
import {Observable} from 'rxjs/Observable';
import {AccountModel} from '../models/account.models';
import {getAccountData, getUserData} from '../store/selectors';
import {routes} from '../core-routing.module';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="account">
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

        <div fxLayout="row" fxShow="false" fxShow.gt-sm *ngIf="$user | async as user">
          <button [routerLink]="['/user']" mat-button>
            <mat-icon class="material-icons">account_circle</mat-icon>
            {{user?.alias ? user.alias : 'username'}}
          </button>
        </div>
        <button mat-button (click)="logout()">
          Log out
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
        <button class="menu-item"
                mat-menu-item
                [routerLink]="['/user']">
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
  $accountSubscription: Subscription;
  account: AccountModel;
  $user: Observable<User>;

  routes = routes.filter(route => route.path !== 'user');

  constructor(private authService: AuthenticationService, private store: Store<State>) {}

  ngOnInit() {
    this.$accountSubscription = this.store.select(getAccountData).subscribe(res => {
      this.account = res as AccountModel;
    });
    this.$user = this.store.select(getUserData);
    if (this.account.userId) {
      this.store.dispatch(new WhoAmI(this.account.userId));
    }
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

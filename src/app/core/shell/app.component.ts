import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-root',
  template: `
      <div class="app-wrapper">
        <a routerLink="/dashboard" routerLinkActive="active">dashboard</a>
        <a routerLink="/admin" routerLinkActive="active">admin</a>
        <a routerLink="/home" routerLinkActive="active">home</a>
        <a routerLink="/login" routerLinkActive="active">login</a>
        <a (click)="logout()">logout</a>

        <router-outlet></router-outlet>
      </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthenticationService) {}

  logout() {
    this.authService.logout();
  }
}

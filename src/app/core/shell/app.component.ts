import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="app-wrapper">
        <a routerLink="/dashboard" routerLinkActive="active">dashboard</a>
        <a routerLink="/admin" routerLinkActive="active">admin</a>
        <a routerLink="/home" routerLinkActive="active">home</a>
        <a routerLink="/login" routerLinkActive="active">login</a>

        <router-outlet></router-outlet>
      </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}

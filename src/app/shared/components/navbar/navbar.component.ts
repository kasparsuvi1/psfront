import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <div class="container">
    <mat-toolbar color="primary">
      <div class="toolbar-content">
        <button mat-icon-button (click)="snav.toggle()">
          <mat-icon class="material-icons">menu</mat-icon>
        </button>
        <h1 class="title">Perfect Strangers</h1>
      </div>
    </mat-toolbar>

    <mat-sidenav-container class="example-sidenav-container">
      <mat-sidenav #snav>
        <mat-nav-list>
          <a mat-list-item routerLink="dashboard">Home</a>
          <a mat-list-item routerLink="profile">profile</a>
          <a mat-list-item routerLink="check-in">check in</a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content class="content">
        <ng-content></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  </div>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

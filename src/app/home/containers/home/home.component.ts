import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      This is a landing page

      <a routerLink="/login">Login</a>
    </p>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

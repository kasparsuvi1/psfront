import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-activate',
  template: `
    <div class="fill-background">
      <div class="centered-box centered-box--wide">
        <img class="centered-box__logo" routerLink="/" src="../../../../assets/images/title_logo2.png" alt="Logo">

        <h1>Thanks for being awesome!</h1>
        <p>We sent a activation link to your email. It is valid for 15 minutes. Go active your account and be back soon!</p>
        <span class="muted">Didn't get the activation link? <a routerLink="/register/resend">Send again!</a></span>

        <button class="home" mat-button color="primary" routerLink="/">Homepage</button>
      </div>
    </div>
  `,
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

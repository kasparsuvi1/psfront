import {Component} from '@angular/core';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {Store} from '@ngrx/store';
import {State} from '../../../core/store/reducers';
import * as accountActions from '../../../core/store/actions/account.actions';
import {AccountState} from '../../../core/store/index';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <div class="fill-background">

      <form class="centered-box" [formGroup]="form">
        <img class="centered-box__logo" src="../../../../assets/images/logo.png" alt="Logo">

        <mat-form-field class="example-full-width">
          <input matInput placeholder="Email" formControlName="email">
          <mat-error>Insert your email or alias</mat-error>
        </mat-form-field>

        <mat-form-field class="example-full-width">
          <input type="password" matInput placeholder="Password" formControlName="password">
          <mat-error>Insert your password</mat-error>
        </mat-form-field>

        <button mat-raised-button type="submit" color="primary" (click)="onSubmit()">Login</button>
        <div class="mt-1">
          <span class="muted">What? You haven't registered yet?</span> <a routerLink="/register">Click here!</a> <br>
          <span class="muted dp-block mt-1">Didn't get the activation link? <a routerLink="/register/resend">Send again!</a></span>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.fb.group({
    email: ['standard@user.com', Validators.compose([Validators.required, Validators.email])],
    password: ['password', Validators.compose([Validators.required])]
  });

  constructor(private fb: FormBuilder, private store: Store<State>) {}

  onSubmit() {
    if (this.form.valid) {
      const payload = {
        password: this.form.get('password').value,
        username: this.form.get('email').value,
        grant_type: 'password'
      };
      this.store.dispatch(new accountActions.Login(payload));
    }
  }
}

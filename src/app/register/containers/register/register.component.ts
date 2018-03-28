import {Component} from '@angular/core';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {Store} from '@ngrx/store';
import {State} from '../../../core/store/reducers';
import * as accountActions from '../../../core/store/actions/account.actions';
import {AccountState} from '../../../core/store/index';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  template: `
    <div class="wrapper">
      <form class="form" [formGroup]="form">
        <mat-form-field class="example-full-width">
          <input matInput placeholder="Email" formControlName="email">
        </mat-form-field>

        <mat-form-field class="example-full-width">
          <input matInput placeholder="Password" formControlName="password">
        </mat-form-field>

        <button mat-raised-button type="submit" color="primary" (click)="onSubmit()">Login</button>
      </form>
      <a routerLink="/login">Already have an account? Login in</a>
    </div>
  `,
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form = this.fb.group({
    email: 'standard@user.com',
    password: 'password'
  });

  constructor(private fb: FormBuilder, private store: Store<State>) {}

  onSubmit() {
    const payload = {
      password: this.form.get('password').value,
      username: this.form.get('email').value,
      grant_type: 'password'
    };
    // this.store.dispatch(new accountActions.Register(payload));
  }
}

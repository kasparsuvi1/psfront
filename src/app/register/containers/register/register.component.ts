import {Component} from '@angular/core';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {Store} from '@ngrx/store';
import {State} from '../../../core/store/reducers';
import * as accountActions from '../../../core/store/actions/account.actions';
import {AccountState} from '../../../core/store/index';
import {FormBuilder, Validators} from '@angular/forms';
import {Validation} from '../validators/password-validation';

@Component({
  selector: 'app-register',
  template: `
    <div class="register">
      <form class="form" [formGroup]="form">
        <mat-form-field class="example-full-width">
          <input matInput placeholder="Email" formControlName="email">
          <mat-error>Email is not valid</mat-error>
        </mat-form-field>
        <mat-form-field class="example-full-width">
          <input matInput placeholder="Confrim email" formControlName="confirmEmail">
          <mat-error>Emails don't match</mat-error>
        </mat-form-field>
        <mat-form-field class="example-full-width">
          <input type="password" matInput placeholder="Password" formControlName="password">
          <mat-error>Passwords is required</mat-error>
        </mat-form-field>
        <mat-form-field class="example-full-width">
          <input type="password" matInput placeholder="Confim password" formControlName="confirmPassword">
          <mat-error>Passwords don't match</mat-error>
        </mat-form-field>
        <button mat-raised-button type="submit" color="primary" (click)="onSubmit()">Register</button>

        <div class="action">
          <span class="muted">Already have an account?</span> <a class="action__link" routerLink="/login">Log in!</a>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form = this.fb.group(
    {
      email: ['', [Validators.compose([Validators.required, Validators.email])]],
      confirmEmail: ['', [Validators.compose([Validators.required, Validators.email])]],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: Validators.compose([Validation.MatchPassword, Validation.MatchEmail]) // your validation method
    }
  );

  constructor(private fb: FormBuilder, private store: Store<State>) {}

  onSubmit() {
    if (this.form.valid) {
      const payload = {
        password: this.form.get('password').value,
        username: this.form.get('email').value
      };
      console.log('Registered:', payload);
      // this.store.dispatch(new accountActions.Register(payload));
    }
  }
}

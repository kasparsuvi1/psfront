import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {FormBuilder, Validators} from '@angular/forms';
import {Validation} from '../validators/password-validation';
import {Register} from '../../store/actions';
import {RegisterViewState} from '../../store/reducers';

@Component({
  selector: 'app-register',
  template: `
    <div class="fill-background">
      <span class="fill-background__back" routerLink="/"><mat-icon>keyboard_backspace</mat-icon> Back to homepage</span>

      <form class="centered-box centered-box--long" [formGroup]="form">
        <h1 class="headline">Register</h1>
        <p class="muted">Join our community now!</p>
        <img class="centered-box__logo" routerLink="/" src="../../../../assets/images/title_logo2.png" alt="Logo">
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

        <div class="mt-1">
          <span class="muted">Already have an account? </span> <a routerLink="/login">Log in!</a>
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
      validator: Validators.compose([Validation.MatchPassword, Validation.MatchEmail])
    }
  );

  constructor(private fb: FormBuilder, private store: Store<RegisterViewState>) {}

  onSubmit() {
    if (this.form.valid) {
      const payload = {
        password: this.form.get('password').value,
        email: this.form.get('email').value
      };
      console.log('Registered:', payload);
      this.store.dispatch(new Register(payload));
    }
  }
}

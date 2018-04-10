import {Component} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {RegisterViewState} from '../../store/reducers';
import {ResendActivation} from '../../store/actions';

@Component({
  selector: 'app-resend',
  template: `
    <div class="fill-background">
      <span class="fill-background__back" routerLink="/"><mat-icon>keyboard_backspace</mat-icon> Back to homepage</span>

      <form class="centered-box" [formGroup]="form">
        <img class="centered-box__logo" routerLink="/" src="../../../../assets/images/logo.png" alt="Logo">

        <mat-form-field class="example-full-width">
          <input matInput placeholder="Enter your email" formControlName="email">
          <mat-error>Insert your email</mat-error>
        </mat-form-field>

        <button mat-raised-button type="submit" color="primary" (click)="onSubmit()">Resend</button>
        <div class="mt-1">
          <span class="muted">Already have an account?</span> <a routerLink="/login">Log in!</a>
        </div>
      </form>
    </div>

  `,
  styleUrls: ['./resend.component.scss']
})
export class ResendComponent {
  form = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])]
  });

  constructor(private fb: FormBuilder, private store: Store<RegisterViewState>) {}

  onSubmit() {
    if (this.form.valid) {
      const payload = {
        email: this.form.get('email').value
      };
      this.store.dispatch(new ResendActivation(payload));
    }
  }
}

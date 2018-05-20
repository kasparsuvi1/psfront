import {Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Validation} from '../../../register/containers/validators/password-validation';
import {Store} from '@ngrx/store';
import {UserViewState} from '../../store/reducers';
import {ChangePassword} from '../../store/actions';

@Component({
  selector: 'app-password-change',
  template: `
  <div class="card">
    <form [formGroup]="form" class="admin-form centered">

      <mat-form-field class="form-field">
        <input  matInput
                placeholder="New password"
                formControlName="password"
                type="password">
        <mat-error *ngIf="form.controls['password'].errors">
          Password must contain 8 characters and have 1 uppercase character!
        </mat-error>
      </mat-form-field>

      <mat-form-field class="form-field">
        <input  matInput
                placeholder="Confirm password"
                formControlName="confirmPassword"
                type="password">
        <mat-error *ngIf="form.controls['confirmPassword'].errors">
          Passwords don't match!
        </mat-error>
      </mat-form-field>

      <button class="btn save" color="primary" type="button" mat-raised-button (click)="emitData()">
        Change password
      </button>

    </form>
  </div>

  `,
  styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent implements OnInit {
  form;

  constructor(private fb: FormBuilder, private store: Store<UserViewState>) {}

  ngOnInit() {
    this.form = this.fb.group(
      {
        password: ['', Validators.compose([Validators.required])],
        confirmPassword: ['', Validators.required]
      },
      {
        validator: Validators.compose([Validation.MatchPassword])
      }
    );
  }

  emitData() {
    if (this.form.valid) {
      const password = this.form.value.password;
      this.store.dispatch(new ChangePassword(password));
    }
  }
}

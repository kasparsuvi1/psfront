import {Component} from '@angular/core';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {Store} from '@ngrx/store';
import {State} from '../../../core/store/reducers';
import * as accountActions from '../../../core/store/actions/account.actions';
import {AccountState} from '../../../core/store/index';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
  <div class="login">
    <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>
      <p>
        <label>Email:</label>
        <input type="text" formControlName="email">
      </p>
      <p>
        <label>password:</label>
        <input type="text" formControlName="password">
      </p>
      <p>
        <button type="submit">Login</button>
      </p>
    </form>
  </div>
`,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
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
    this.store.dispatch(new accountActions.Login(payload));
  }
}

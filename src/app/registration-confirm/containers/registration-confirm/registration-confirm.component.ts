import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RegistrationConfirmService} from '../../services/registration-confirm.service';
import {map} from 'rxjs/internal/operators/map';
import {catchError} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {ConfirmViewState} from '../../store/reducers';
import {ConfirmRegistration} from '../../store/actions';

@Component({
  selector: 'app-registration-confirm',
  template: `
  <div class="fill-background">
    <div class="centered-box centered-box--wide">
      <img class="centered-box__logo" routerLink="/" src="../../../../assets/images/logo.png" alt="Logo">

      <h1>Thanks for being awesome!</h1>
      <p>Ur account should be now activated, if not then contact our administrator!</p>
      <span class="muted">Or try again? <a routerLink="/register/resend">Send again!</a></span>

      <button class="home" mat-button color="primary" routerLink="/">Homepage</button>
    </div>
  </div>

  `,
  styleUrls: ['./registration-confirm.component.scss']
})
export class RegistrationConfirmComponent implements OnInit {
  token: string;

  constructor(private route: ActivatedRoute, private store: Store<ConfirmViewState>) {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });

    this.registrationConfrim(this.token);
  }

  ngOnInit() {}

  registrationConfrim(token) {
    this.store.dispatch(new ConfirmRegistration(token));
  }
}

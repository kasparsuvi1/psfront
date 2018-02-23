import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../core/services/authentication.service';

@Component({
  selector: 'app-login',
  template: `
    <p>
      login works!
      <button (click)="login()">Login</button>
      <span>{{ result | json}}</span>
    </p>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}
  result;
  ngOnInit() {}

  login() {
    this.result = this.authService.login('standard@user.com', 'password', 'password');
  }
}

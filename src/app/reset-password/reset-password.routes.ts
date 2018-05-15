import {Routes} from '@angular/router';
import {ResetPasswordComponent} from './containers/reset-password/reset-password.component';
import {AuthGuardService} from '../core/guards/auth-guard.service';
import {RoleValues} from '../core/models/account.models';

export const ResetPasswordRoutes: Routes = [
  {
    path: '',
    component: ResetPasswordComponent
  }
];

import {Routes} from '@angular/router';
import {AuthGuardService} from '../core/guards/auth-guard.service';
import {RoleValues} from '../core/models/account.models';
import {ProfileComponent} from './containers/profile/profile.component';
import {PasswordChangeComponent} from './containers/password-change/password-change.component';

export const UserRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
    data: {expectedRoles: [RoleValues.ADMIN_USER, RoleValues.STANDARD_USER]}
  },
  {
    path: 'password-change',
    component: PasswordChangeComponent,
    canActivate: [AuthGuardService],
    data: {expectedRoles: [RoleValues.ADMIN_USER, RoleValues.STANDARD_USER]}
  }
];

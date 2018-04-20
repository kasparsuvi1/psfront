import {Routes} from '@angular/router';
import {AuthGuardService} from '../core/guards/auth-guard.service';
import {RoleValues} from '../core/models/account.models';
import {ProfileComponent} from './containers/profile/profile.component';

export const UserRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
    data: {expectedRoles: [RoleValues.ADMIN_USER, RoleValues.STANDARD_USER]}
  }
];

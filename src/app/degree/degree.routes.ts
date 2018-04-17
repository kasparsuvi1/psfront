import {Routes} from '@angular/router';
import {DegreesComponent} from './container/degrees/degrees.component';
import {NewComponent} from './container/new/new.component';
import {AuthGuardService} from '../core/guards/auth-guard.service';
import {RoleValues} from '../core/models/account.models';
import {DegreeComponent} from './container/degree/degree.component';

export const DegreeRoutes: Routes = [
  {
    path: 'new',
    component: NewComponent,
    canActivate: [AuthGuardService],
    data: {expectedRoles: [RoleValues.ADMIN_USER]}
  },
  {
    path: '',
    component: DegreesComponent,
    canActivate: [AuthGuardService],
    data: {expectedRoles: [RoleValues.ADMIN_USER]}
  },
  {
    path: ':id',
    component: DegreeComponent,
    data: {expectedRoles: [RoleValues.ADMIN_USER]}
  }
];

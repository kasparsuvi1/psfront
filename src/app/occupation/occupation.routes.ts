import {Routes} from '@angular/router';
import {OccupationsComponent} from './container/occupations/occupations.component';
import {NewComponent} from './container/new/new.component';
import {AuthGuardService} from '../core/guards/auth-guard.service';
import {RoleValues} from '../core/models/account.models';
import {OccupationComponent} from './container/occupation/occupation.component';

export const OccupationRoutes: Routes = [
  {
    path: 'new',
    component: NewComponent,
    canActivate: [AuthGuardService],
    data: {expectedRoles: [RoleValues.ADMIN_USER]}
  },
  {
    path: '',
    component: OccupationsComponent,
    canActivate: [AuthGuardService],
    data: {expectedRoles: [RoleValues.ADMIN_USER]}
  },
  {
    path: ':id',
    component: OccupationComponent,
    data: {expectedRoles: [RoleValues.ADMIN_USER]}
  }
];

import {Routes} from '@angular/router';
import {RestosComponent} from './containers/restos/restos.component';
import {NewComponent} from './containers/new/new.component';
import {AuthGuardService} from '../core/guards/auth-guard.service';
import {RoleValues} from '../core/models/account.models';
import {RestoComponent} from './containers/resto/resto.component';

export const HotelRoutes: Routes = [
  {
    path: 'new',
    component: NewComponent,
    canActivate: [AuthGuardService],
    data: {expectedRoles: [RoleValues.ADMIN_USER]}
  },
  {
    path: '',
    component: RestosComponent,
    canActivate: [AuthGuardService],
    data: {expectedRoles: [RoleValues.ADMIN_USER]}
  },
  {
    path: ':id',
    component: RestoComponent,
    data: {expectedRoles: [RoleValues.ADMIN_USER]}
  }
];

import {Routes} from '@angular/router';
import {HotelsComponent} from './containers/hotels/hotels.component';
import {NewComponent} from './containers/new/new.component';
import {AuthGuardService} from '../core/guards/auth-guard.service';
import {RoleValues} from '../core/models/account.models';
import {HotelComponent} from './containers/hotel/hotel.component';

export const HotelRoutes: Routes = [
  {
    path: 'new',
    component: NewComponent,
    canActivate: [AuthGuardService],
    data: {expectedRoles: [RoleValues.ADMIN_USER]}
  },
  {
    path: '',
    component: HotelsComponent,
    canActivate: [AuthGuardService],
    data: {expectedRoles: [RoleValues.ADMIN_USER]}
  },
  {path: ':id', component: HotelComponent}
];

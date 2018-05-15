import {Routes} from '@angular/router';
import {AuthGuardService} from '../core/guards/auth-guard.service';
import {RoleValues} from '../core/models/account.models';
import {RegistrationConfirmComponent} from './containers/registration-confirm/registration-confirm.component';

export const RegistrationConfrimRoutes: Routes = [
  {
    path: '',
    component: RegistrationConfirmComponent
  }
];

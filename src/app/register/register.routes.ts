import {Routes} from '@angular/router';
import {RegisterComponent} from './containers/register/register.component';
import {ActivateComponent} from './containers/activate/activate.component';
import {ResendComponent} from './containers/resend/resend.component';

export const LoginRoutes: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'activate', component: ActivateComponent},
  {path: 'resend', component: ResendComponent}
];

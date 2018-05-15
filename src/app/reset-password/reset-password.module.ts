import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResetPasswordComponent} from './containers/reset-password/reset-password.component';
import {RouterModule} from '@angular/router';

// services
import {ResetPasswordService} from './services/reset-password.service';

// components
import {ResetPasswordRoutes} from './reset-password.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ResetPasswordRoutes)],
  declarations: [ResetPasswordComponent],
  providers: [ResetPasswordService]
})
export class ResetPasswordModule {}

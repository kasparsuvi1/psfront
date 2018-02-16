import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// routes
import {LoginRoutes} from './login.routes';

// components
import {LoginComponent} from './containers/login/login.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(LoginRoutes)],
  declarations: [LoginComponent]
})
export class LoginModule {}

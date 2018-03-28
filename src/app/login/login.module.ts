import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// routes
import {LoginRoutes} from './login.routes';

// components
import {LoginComponent} from './containers/login/login.component';

// material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(LoginRoutes), FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  declarations: [LoginComponent]
})
export class LoginModule {}

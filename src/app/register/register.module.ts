import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// routes
import {LoginRoutes} from './register.routes';

// services
import {RegisterService} from './services/register.service';

// store
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './store/reducers';
import {effects} from './store/effects';

// material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';

// components
import {RegisterComponent} from './containers/register/register.component';
import { ActivateComponent } from './containers/activate/activate.component';
import { ResendComponent } from './containers/resend/resend.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    StoreModule.forFeature('register', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [RegisterComponent, ActivateComponent, ResendComponent],
  providers: [RegisterService]
})
export class RegisterModule {}

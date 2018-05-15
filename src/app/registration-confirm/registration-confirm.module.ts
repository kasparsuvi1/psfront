import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RegistrationConfrimRoutes} from './registration-confirm.routes';

// services
import {RegistrationConfirmService} from './services/registration-confirm.service';

// store
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './store/reducers';
import {effects} from './store/effects';

// material
import {MatButtonModule} from '@angular/material/button';

// components
import {RegistrationConfirmComponent} from './containers/registration-confirm/registration-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RegistrationConfrimRoutes),
    StoreModule.forFeature('hotels', reducers),
    EffectsModule.forFeature(effects),
    MatButtonModule
  ],
  declarations: [RegistrationConfirmComponent],
  providers: [RegistrationConfirmService]
})
export class RegistrationConfirmModule {}

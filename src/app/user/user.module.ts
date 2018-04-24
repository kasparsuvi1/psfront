import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {UserRoutes} from './user.routes';

// store
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './store/reducers';
import {effects} from './store/effects';

// services
import {UserService} from './services/user.service';

// material
import {MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule} from '@angular/material';

// components
import {ProfileComponent} from './containers/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UserRoutes),
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature(effects),
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: [ProfileComponent],
  providers: [UserService]
})
export class UserModule {}

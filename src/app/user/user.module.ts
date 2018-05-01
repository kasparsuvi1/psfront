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
import {HotelService} from './services/hotel.service';
import {RestoService} from './services/resto.service';

// material
import {MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material';
import {Ng5TimePickerModule} from 'ng5-time-picker';

// components
import {ProfileComponent} from './containers/profile/profile.component';
import {UserFormComponent} from './components/user-form/user-form.component';
import {AdvertComponent} from './components/advert/advert.component';

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
    MatSelectModule,
    MatIconModule,
    Ng5TimePickerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [ProfileComponent, UserFormComponent, AdvertComponent],
  providers: [UserService, HotelService, RestoService]
})
export class UserModule {}

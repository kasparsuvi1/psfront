import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// store
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './store/reducers';
import {effects} from './store/effects';

// routes
import {HotelRoutes} from './hotels.routes';

// services
import {HotelService} from './services/hotel.service';

// components
import {HotelsComponent} from './containers/hotels/hotels.component';
import {NewComponent} from './containers/new/new.component';
import {HotelComponent} from './containers/hotel/hotel.component';
import {HotelsFormComponent} from './components/hotels-form/hotels-form.component';

// material
import {MatButtonModule, MatInputModule, MatFormFieldModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(HotelRoutes),
    StoreModule.forFeature('hotels', reducers),
    EffectsModule.forFeature(effects),
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [HotelsComponent, NewComponent, HotelComponent, HotelsFormComponent],
  providers: [HotelService]
})
export class HotelsModule {}

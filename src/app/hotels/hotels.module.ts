import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

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

// material
import {MatButtonModule} from '@angular/material';
import { NewComponent } from './containers/new/new.component';
import { HotelComponent } from './containers/hotel/hotel.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(HotelRoutes),
    StoreModule.forFeature('hotels', reducers),
    EffectsModule.forFeature(effects),
    MatButtonModule
  ],
  declarations: [HotelsComponent, NewComponent, HotelComponent],
  providers: [HotelService]
})
export class HotelsModule {}

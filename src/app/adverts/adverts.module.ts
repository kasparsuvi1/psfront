import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdvertsRoutes} from './adverts.routes';
import {SharedModule} from '../shared/shared.module';

// store
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './store/reducers';
import {effects} from './store/effects';

// services
import {AdvertService} from './services/advert.service';
import {HotelService} from './services/hotels.service';

// material
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

// components
import {AdvertsComponent} from './containers/adverts/adverts.component';
import {AdvertComponent} from './components/advert/advert.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdvertsRoutes),
    StoreModule.forFeature('adverts', reducers),
    EffectsModule.forFeature(effects),
    SharedModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [AdvertsComponent, AdvertComponent],
  providers: [AdvertService, HotelService]
})
export class AdvertsModule {}

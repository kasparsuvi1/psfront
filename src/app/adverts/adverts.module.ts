import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdvertsRoutes} from './adverts.routes';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {Ng5TimePickerModule} from 'ng5-time-picker';

// components
import {AdvertsComponent} from './containers/adverts/adverts.component';
import {AdvertComponent} from './components/advert/advert.component';
import {AnswerAdvertComponent} from './components/answer-advert/answer-advert.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdvertsRoutes),
    StoreModule.forFeature('adverts', reducers),
    EffectsModule.forFeature(effects),
    SharedModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    Ng5TimePickerModule
  ],
  declarations: [AdvertsComponent, AdvertComponent, AnswerAdvertComponent],
  providers: [AdvertService, HotelService],
  entryComponents: [AnswerAdvertComponent]
})
export class AdvertsModule {}

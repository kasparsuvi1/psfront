import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// store
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HotelRoutes} from './restos.routes';
import {reducers} from './store/reducers';
import {effects} from './store/effects';

// services
import {RestoService} from './service/resto.service';

// material
import {MatButtonModule, MatInputModule, MatFormFieldModule} from '@angular/material';

// components
import {RestosComponent} from './containers/restos/restos.component';
import {RestoComponent} from './containers/resto/resto.component';
import {NewComponent} from './containers/new/new.component';
import {RestoFormComponent} from './components/resto-form/resto-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(HotelRoutes),
    StoreModule.forFeature('restos', reducers),
    EffectsModule.forFeature(effects),
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [RestosComponent, RestoComponent, NewComponent, RestoFormComponent],
  providers: [RestoService]
})
export class RestosModule {}

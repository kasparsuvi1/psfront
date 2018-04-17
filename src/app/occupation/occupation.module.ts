import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

// routes
import {OccupationRoutes} from './occupation.routes';
import {RouterModule} from '@angular/router';

// store
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './store/reducers';
import {effects} from './store/effects';

// material
import {MatButtonModule, MatInputModule, MatFormFieldModule} from '@angular/material';

// services
import {OccupationService} from './services/occupation.service';

// components
import {OccupationsComponent} from './container/occupations/occupations.component';
import {OccupationComponent} from './container/occupation/occupation.component';
import {NewComponent} from './container/new/new.component';
import {OccupationFormComponent} from './components/occupation-form/occupation-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(OccupationRoutes),
    StoreModule.forFeature('occupation', reducers),
    EffectsModule.forFeature(effects),
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [OccupationsComponent, OccupationComponent, NewComponent, OccupationFormComponent],
  providers: [OccupationService]
})
export class OccupationModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

// routes
import {RouterModule} from '@angular/router';
import {DegreeRoutes} from './degree.routes';

// store
import {reducers} from './store/reducers';
import {effects} from './store/effects';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

// material
import {MatButtonModule, MatInputModule, MatFormFieldModule} from '@angular/material';

// services
import {DegreeService} from './services/degree.service';

// components
import {NewComponent} from './container/new/new.component';
import {DegreeComponent} from './container/degree/degree.component';
import {DegreesComponent} from './container/degrees/degrees.component';
import {DegreeFormComponent} from './components/degree-form/degree-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(DegreeRoutes),
    StoreModule.forFeature('degree', reducers),
    EffectsModule.forFeature(effects),
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [NewComponent, DegreeComponent, DegreesComponent, DegreeFormComponent],
  providers: [DegreeService]
})
export class DegreeModule {}

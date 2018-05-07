import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DashboardRoutes} from './dashboard.routes';
import {SharedModule} from '../shared/shared.module';
// material
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

// components
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {AdvertsComponent} from './components/adverts/adverts.component';
import {ResponsesComponent} from './components/responses/responses.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    SharedModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: [DashboardComponent, AdvertsComponent, ResponsesComponent]
})
export class DashboardModule {}

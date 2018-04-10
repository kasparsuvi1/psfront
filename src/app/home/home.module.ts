import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// routes
import {HomeRoutes} from './home.routes';

// material
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';

// components
import {HomeComponent} from './containers/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}

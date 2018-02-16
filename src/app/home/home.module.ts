import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './containers/home/home.component';
import {RouterModule} from '@angular/router';

// routes
import {HomeRoutes} from './home.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(HomeRoutes)],
  declarations: [HomeComponent]
})
export class HomeModule {}

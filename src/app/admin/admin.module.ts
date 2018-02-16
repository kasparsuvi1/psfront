import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// routes
import {AdminRoutes} from './admin.routes';

// components
import {AdminComponent} from './containers/admin/admin.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(AdminRoutes)],
  declarations: [AdminComponent]
})
export class AdminModule {}

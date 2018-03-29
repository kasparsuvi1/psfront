import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// store
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './store/reducers';
import {effects} from './store/effects';

// routes
import {AdminRoutes} from './admin.routes';

// services
import {UsersService} from './services/users.service';

// components
import {AdminComponent} from './containers/admin/admin.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(AdminRoutes), StoreModule.forFeature('admin', reducers), EffectsModule.forFeature(effects)],
  declarations: [AdminComponent],
  providers: [UsersService]
})
export class AdminModule {}

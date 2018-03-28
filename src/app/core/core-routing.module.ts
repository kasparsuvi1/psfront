import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoleValues} from './models/account.models';
import {AuthGuardService} from './services/auth-guard.service';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: '../login/login.module#LoginModule'
  },
  {
    path: 'home',
    loadChildren: '../home/home.module#HomeModule',
    data: {
      title: 'HOMEPAGE'
    }
  },
  {
    path: 'dashboard',
    loadChildren: '../dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuardService],
    data: {
      title: 'DASHBOARD',
      expectedRoles: [RoleValues.ADMIN_USER, RoleValues.STANDARD_USER]
    }
  },
  {
    path: 'admin',
    loadChildren: '../admin/admin.module#AdminModule',
    canActivate: [AuthGuardService],
    data: {
      title: 'ADMIN',
      expectedRoles: [RoleValues.ADMIN_USER]
    }
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}

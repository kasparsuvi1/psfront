import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoleValues} from './models/account.models';
import {AuthGuardService} from './guards/auth-guard.service';
import {IsLoggedOffService} from './guards/is-logged-off.service';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: '../login/login.module#LoginModule',
    canActivate: [IsLoggedOffService]
  },
  {
    path: 'register',
    loadChildren: '../register/register.module#RegisterModule',
    canActivate: [IsLoggedOffService]
  },
  {
    path: 'home',
    loadChildren: '../home/home.module#HomeModule',
    canActivate: [IsLoggedOffService],
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

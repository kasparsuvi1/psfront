import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// import {AuthGuard} from './guards/auth-guard.service';
// import {AdminAuthGuard} from './guards/admin-auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
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
    data: {
      title: 'DASHBOARD'
    }
  },
  {
    path: 'admin',
    loadChildren: '../admin/admin.module#AdminModule',
    data: {
      title: 'ADMIN'
    }
  },
  {path: '**', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}

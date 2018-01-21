import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule'},
];

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {environment} from '../../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// modules
import {SharedModule} from '../shared/shared.module';


// components
import { AppComponent } from './shell/app.component';

// routes
import {routes} from './routes';

// material


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
  bootstrap: [
    AppComponent
  ]
})
export class CoreModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {environment} from '../../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {JwtModule} from '@auth0/angular-jwt';

// modules
import {SharedModule} from '../shared/shared.module';

// components
import {AppComponent} from './shell/app.component';

// routes
import {routes} from './routes';

// material

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['you API url']
      }
    })
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class CoreModule {}

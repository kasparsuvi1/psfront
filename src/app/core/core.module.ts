import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {JwtModule} from '@auth0/angular-jwt';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../../environments/environment';

import {CoreRoutingModule} from './core-routing.module';

import {AppComponent} from './shell/app.component';

import {AuthenticationService} from './services/authentication.service';
import {AuthGuardService} from './services/auth-guard.service';
import {TOKEN_NAME} from './services/auth.constants';

// store
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {reducers, metaReducers} from './store/reducers';
import {effects} from './store/effects';

// MAterial
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

export function getToken() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CoreRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot(effects),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: ['138.68.71.15:8080']
      }
    }),
    environment.production ? [] : StoreDevtoolsModule.instrument({actionSanitizer: action => JSON.parse(JSON.stringify(action))}),
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class CoreModule {}

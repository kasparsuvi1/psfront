import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {JwtModule} from '@auth0/angular-jwt';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../../environments/environment';

import {CoreRoutingModule} from './core-routing.module';

import {AppComponent} from './shell/app.component';
import {SharedModule} from '../shared/shared.module';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';

// services
import {AuthenticationService} from './services/authentication.service';
import {AuthGuardService} from './guards/auth-guard.service';
import {IsLoggedOffService} from './guards/is-logged-off.service';
import {MessagesService} from './services/messages.service';
import {DegreeService} from './services/degree.service';
import {AdvertService} from './services/advert.service';
import {ResponseService} from './services/response.service';
import {OccupationService} from './services/occupation.service';
import {TOKEN_NAME} from './services/auth.constants';

import {AuthInterceptor} from './interceptors/auth.interceptor';

// store
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {reducers, metaReducers, CustomSerializer} from './store/reducers';
import {effects} from './store/effects';

// Material
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {APP_BASE_HREF} from '@angular/common';

export function getToken() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    GooglePlaceModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot(effects),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: ['https://profmeetclub.com']
      }
    }),
    StoreRouterConnectingModule,
    environment.production ? [] : StoreDevtoolsModule.instrument({actionSanitizer: action => JSON.parse(JSON.stringify(action))}),
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [
    HttpClientModule,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: RouterStateSerializer, useClass: CustomSerializer},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    AuthenticationService,
    AuthGuardService,
    IsLoggedOffService,
    MessagesService,
    DegreeService,
    OccupationService,
    AdvertService,
    ResponseService
  ],
  bootstrap: [AppComponent]
})
export class CoreModule {}

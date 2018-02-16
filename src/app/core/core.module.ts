import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import {AuthConfig, AuthHttp} from 'angular2-jwt';

import {CoreRoutingModule} from './core-routing.module';

import {AppComponent} from './shell/app.component';

// import {UserService} from './services/user.service';
// import {AuthenticationService} from './services/authentication.service';
// import {AuthGuard} from './guards/auth-guard.service';
// import {AdminAuthGuard} from './guards/admin-auth-guard.service';
// import {TOKEN_NAME} from './services/auth.constant';
// import {AppDataService} from './services/app-data.service';

// export function authHttpServiceFactory(http: Http) {
//   return new AuthHttp(
//     new AuthConfig({
//       headerPrefix: 'Bearer',
//       tokenName: TOKEN_NAME,
//       globalHeaders: [{'Content-Type': 'application/json'}],
//       noJwtError: false,
//       noTokenScheme: true,
//       tokenGetter: () => localStorage.getItem(TOKEN_NAME)
//     }),
//     http
//   );
// }

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule, CoreRoutingModule],
  providers: [
    // {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http]},
    // AuthenticationService,
    // UserService,
    // AuthGuard,
    // AdminAuthGuard,
    // AppDataService
  ],
  bootstrap: [AppComponent]
})
export class CoreModule {}

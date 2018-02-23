import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {JwtModule} from '@auth0/angular-jwt';
import {HttpClientModule} from '@angular/common/http';

import {CoreRoutingModule} from './core-routing.module';

import {AppComponent} from './shell/app.component';

// import {UserService} from './services/user.service';
import {AuthenticationService} from './services/authentication.service';
// import {AuthGuard} from './guards/auth-guard.service';
// import {AdminAuthGuard} from './guards/admin-auth-guard.service';
import {TOKEN_NAME} from './services/auth.constants';
// import {AppDataService} from './services/app-data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CoreRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['138.68.71.15:8080']
      }
    })
  ],
  providers: [
    AuthenticationService
    // UserService,
    // AuthGuard,
    // AdminAuthGuard,
    // AppDataService
  ],
  bootstrap: [AppComponent]
})
export class CoreModule {}

import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {SharedModule} from '../../shared/shared.module';
import {APP_BASE_HREF} from '@angular/common';
import {AuthenticationService} from '../services/authentication.service';
import {AuthGuardService} from '../guards/auth-guard.service';
import {IsLoggedOffService} from '../guards/is-logged-off.service';
import {MessagesService} from '../services/messages.service';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from '../store';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          StoreModule.forRoot(reducers, {metaReducers}),
          RouterTestingModule,
          MatButtonModule,
          MatIconModule,
          MatToolbarModule,
          SharedModule
        ],
        declarations: [AppComponent],
        providers: [{provide: APP_BASE_HREF, useValue: '/'}, AuthenticationService, AuthGuardService, IsLoggedOffService, MessagesService]
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {State} from '../store/reducers';
import {getAccountData} from '../store/selectors';
import {AccountModel} from '../models/account.models';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  account: AccountModel = {} as AccountModel;

  constructor(private store: Store<State>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.store.select(getAccountData).subscribe(res => {
      this.account = res;
    });
    // const hash = Math.floor(Math.random() * 900000) + 100000;
    // console.log('Request: ', req.url, ' - and hash - ', hash);

    const noheader = ['/oauth/token', 'api/public/register/new-user', '/api/public/register/resend-registration-confirmation'];

    if (!noheader.includes(req.url)) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.account.access_token}`
        }
      });
    }

    return next.handle(req);
  }
}

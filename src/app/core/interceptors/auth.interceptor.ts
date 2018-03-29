import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
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
    const hash = Math.floor(Math.random() * 900000) + 100000;
    console.log('Request: ', req.url, ' - and hash - ', hash);

    // If request is /oauth/token, dont add header.
    if (req.url !== '/oauth/token') {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.account.access_token}`
        }
      });
    }

    return next.handle(req);
  }
}

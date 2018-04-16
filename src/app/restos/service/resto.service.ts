import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class RestoService {
  constructor(private httpClient: HttpClient) {}

  getRestos(): Observable<Resto[]> {
    console.log('test');
    return this.httpClient.get('/api/private/restos').pipe(map(res => res as Resto[]));
  }
}

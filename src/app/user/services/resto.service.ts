import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class RestoService {
  constructor(private httpClient: HttpClient) {}

  getRestos(): Observable<Resto[]> {
    return this.httpClient.get('/api/private/resto').pipe(map(res => res as Resto[]));
  }
}

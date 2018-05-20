import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class AdvertService {
  constructor(private httpClient: HttpClient) {}

  getAdverts(): Observable<Advert[]> {
    return this.httpClient.get(`/api/private/invitation`).pipe(map(res => res as Advert[]));
  }
}

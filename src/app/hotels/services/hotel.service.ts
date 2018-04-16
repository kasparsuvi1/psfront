import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class HotelService {
  constructor(private httpClient: HttpClient) {}

  getHotels(): Observable<Hotel[]> {
    return this.httpClient.get('/api/private/hotels').pipe(map(res => res as Hotel[]));
  }
}

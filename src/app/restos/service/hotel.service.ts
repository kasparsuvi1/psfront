import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class HotelService {
  constructor(private httpClient: HttpClient) {}

  getHotels(): Observable<Hotel[]> {
    return this.httpClient.get('/api/private/hotel').pipe(map(res => res as Hotel[]));
  }
}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class HotelService {
  constructor(private httpClient: HttpClient) {}

  getHotels(): Observable<Hotel[]> {
    return this.httpClient.get('/api/private/hotel').pipe(map(res => res as Hotel[]));
  }

  addHotel(hotel): Observable<Hotel> {
    return this.httpClient.post('/api/private/hotel/new', hotel).pipe(map(res => res as Hotel));
  }

  updateHotel(hotel): Observable<Hotel> {
    return this.httpClient.put(`/api/private/hotel/update/${hotel.id}`, hotel).pipe(map(res => res as Hotel));
  }

  deleteHotel(id): Observable<Hotel> {
    return this.httpClient.delete(`/api/private/hotel/delete/${id}`).pipe(map(res => res as Hotel));
  }
}

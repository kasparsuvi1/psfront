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

  getUserAdverts(): Observable<Advert[]> {
    return this.httpClient.get(`/api/private/user/invitations`).pipe(map(res => res as Advert[]));
  }

  addAdvert(advert: Advert): Observable<Advert> {
    return this.httpClient.post('/api/private/invitation/new', advert).pipe(map(res => res as Advert));
  }

  updateAdvert(advert: Advert): Observable<Advert> {
    return this.httpClient.put(`/api/private/invitation/update/${advert.id}`, advert).pipe(map(res => res as Advert));
  }

  deleteAdvert(id: number): Observable<Advert> {
    return this.httpClient.delete(`/api/private/invitation/delete/${id}`).pipe(map(res => res as Advert));
  }

  acceptResponse(advertId: number, responseId: number) {
    return this.httpClient.put(`/api/private/invitation/${advertId}/accept/${responseId}`, {}).pipe(map(res => res as Response));
  }
  declineResponse(advertId: number, responseId: number) {
    return this.httpClient.put(`/api/private/invitation/${advertId}/decline/${responseId}`, {}).pipe(map(res => res as Response));
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class OccupationService {
  constructor(private httpClient: HttpClient) {}

  getOccupations(): Observable<Occupation[]> {
    return this.httpClient.get('/api/private/occupation').pipe(map(res => res as Occupation[]));
  }

  addOccupation(occupation): Observable<Occupation> {
    return this.httpClient.post('/api/private/occupation/new', occupation).pipe(map(res => res as Occupation));
  }

  updateOccupation(occupation): Observable<Occupation> {
    return this.httpClient.put(`/api/private/occupation/update/${occupation.id}`, occupation).pipe(map(res => res as Occupation));
  }

  deleteOccupation(id): Observable<Occupation> {
    return this.httpClient.delete(`/api/private/occupation/delete/${id}`).pipe(map(res => res as Occupation));
  }
}

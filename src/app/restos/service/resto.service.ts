import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class RestoService {
  constructor(private httpClient: HttpClient) {}

  getRestos(): Observable<Resto[]> {
    return this.httpClient.get('/api/private/resto').pipe(map(res => res as Resto[]));
  }

  addResto(resto): Observable<Resto> {
    return this.httpClient.post('/api/private/resto/new', resto).pipe(map(res => res as Resto));
  }

  updateResto(resto): Observable<Resto> {
    return this.httpClient.put(`/api/private/resto/update/${resto.id}`, resto).pipe(map(res => res as Resto));
  }

  deleteResto(id): Observable<Resto> {
    return this.httpClient.delete(`/api/private/resto/delete/${id}`).pipe(map(res => res as Resto));
  }
}

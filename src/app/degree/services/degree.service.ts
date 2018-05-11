import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class DegreeService {
  constructor(private httpClient: HttpClient) {}

  getDegrees(): Observable<Degree[]> {
    return this.httpClient.get('/api/private/degree').pipe(map(res => res as Degree[]));
  }

  addDegree(degree): Observable<Degree> {
    return this.httpClient.post('/api/private/degree/new', degree).pipe(map(res => res as Degree));
  }

  updateDegree(degree): Observable<Degree> {
    return this.httpClient.put(`/api/private/degree/update/${degree.id}`, degree).pipe(map(res => res as Degree));
  }

  deleteDegree(id): Observable<Degree> {
    return this.httpClient.delete(`/api/private/degree/delete/${id}`).pipe(map(res => res as Degree));
  }
}

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
}

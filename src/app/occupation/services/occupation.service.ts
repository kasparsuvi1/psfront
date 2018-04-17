import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class OccupationService {
  constructor(private httpClient: HttpClient) {}

  getOccupations(): Observable<Occupation[]> {
    return this.httpClient.get('/api/private/occupation').pipe(map(res => res as Occupation[]));
  }
}

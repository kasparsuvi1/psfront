import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class ResponseService {
  constructor(private httpClient: HttpClient) {}
  getUserResponses(): Observable<Response[]> {
    return this.httpClient.get(`/api/private/user/responses`).pipe(map(res => res as Response[]));
  }

  addResponse(response: Response): Observable<Response> {
    return this.httpClient.post('/api/private/response/new', response).pipe(map(res => res as Response));
  }

  updateResponse(response: Response): Observable<Response> {
    return this.httpClient.put(`/api/private/response/update/${response.id}`, response).pipe(map(res => res as Response));
  }

  deleteResponse(id: number): Observable<Response> {
    return this.httpClient.delete(`/api/private/response/delete/${id}`).pipe(map(res => res as Response));
  }
}

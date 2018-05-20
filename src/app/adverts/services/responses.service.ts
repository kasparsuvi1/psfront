import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponsesService {
  constructor(private httpClient: HttpClient) {}

  addResponse(payload): Observable<Response> {
    const data = {responseText: payload.responseText, proposedTime: payload.proposedTime};
    return this.httpClient.post(`/api/private/invitation/${payload.advert.id}/response/new`, data).pipe(map(res => res as Response));
  }
}

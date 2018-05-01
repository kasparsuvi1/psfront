import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUser(id: number): Observable<User> {
    return this.httpClient.get(`/api/private/user/${id}`).pipe(map(res => res as User));
  }

  getCurrentUser(): Observable<User> {
    return this.httpClient.get(`/api/private/user/current-user`).pipe(map(res => res as User));
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`/api/private/user/delete/${id}`).pipe(map(res => res as User));
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put(`/api/private/user/update`, user).pipe(map(res => res as User));
  }

  changePassword(password: string) {
    return this.httpClient.post(`/api/private/user/change-password`, password).pipe(map(res => res as User));
  }
}

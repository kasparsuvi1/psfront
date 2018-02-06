import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class UserService {
  users = [
    {
      id: 1,
      email: 'test@demo.com',
      password: '123parool',
      alias: 'Tiit Teet',
      sex: 'm',
      age: 'junior',
      occupation: 'IT',
      degree: 'Bachelor',
      role: 'admin',
      reg_date: new Date(),
      last_visit: new Date(),
      prefered_sex: 'same',
      language: ['EE', 'EN'],
      activated: true
    },
    {
      id: 2,
      email: 'mari@demo.com',
      password: 'parool123',
      alias: 'Mari Karu',
      sex: 'w',
      age: 'middle',
      occupation: 'medical science',
      degree: 'Bachelor',
      role: 'user',
      reg_date: new Date(),
      last_visit: new Date(),
      prefered_sex: 'any',
      language: ['EE', 'EN'],
      activated: true
    }
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User): Observable<User> {
    const lastID = this.users[this.users.length - 1].id + 1 || 0;
    return of({id: lastID, ...user});
  }

  updateUser(user: User): Observable<User> {
    console.log('Updated user:', user);
    return of(user);
  }

  deleteUser(user: User): Observable<boolean> {
    return of(true);
  }
}

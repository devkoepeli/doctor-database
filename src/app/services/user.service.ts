import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://jsonplaceholder.typicode.com/users';
  http = inject(HttpClient);

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}

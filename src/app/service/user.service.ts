import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser(id): Observable<User> {
    return this.httpClient.get<User>( environment.api + 'users/' + id);
  }

  updateUser(user): Observable<User> {
    return this.httpClient.put<User>(environment.api + 'users', user);
  }

  deleteUser(id): Observable<any>{
    return this.httpClient.delete<any>(environment.api + 'users/' + id);
  }

}

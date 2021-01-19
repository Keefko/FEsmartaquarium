import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(data): Observable<User>{
    return this.httpClient.get<User>(environment.api + 'login/' + data.login + '/' + data.password);
  }

  register(data): Observable<User>{
    return this.httpClient.post<User>(environment.api + 'users/add', data);
  }

  getUser(id): Observable<User> {
    return  this.httpClient.get<User>(environment.api + 'users/' + id);
  }

  loggedIn(): any {
    return !!sessionStorage.getItem('id');
  }

}

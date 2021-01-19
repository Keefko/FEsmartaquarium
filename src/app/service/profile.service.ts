import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // tslint:disable-next-line:variable-name
  private _user: Observable<User>;
  constructor(){ }


  get user(): Observable<User> {
    return this._user;
  }

  set user(value: Observable<User>) {
    this._user = value;
  }
}

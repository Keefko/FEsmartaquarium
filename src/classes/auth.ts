import {EventEmitter} from '@angular/core';
import {User} from '../app/interfaces/user';


export  class Auth {
  static userEmmiter = new EventEmitter<User>();
}

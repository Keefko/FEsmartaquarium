import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Notification} from '../interfaces/notification';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private httpClient: HttpClient) { }

  get(id: number): Observable<Notification[]>{
    return this.httpClient.get<Notification[]>( environment.api + 'notification/user/' + id);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(environment.api + 'notification/' + id);
  }
}

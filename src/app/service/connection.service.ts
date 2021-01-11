import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Connection} from '../interfaces/connection';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private httpClient: HttpClient) { }

  getByAquarium(id: number): Observable<Connection> {
    return this.httpClient.get<Connection>( environment.api + 'connection/aquarium/' + id);
  }
}

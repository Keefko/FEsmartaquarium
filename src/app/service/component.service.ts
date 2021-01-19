import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Component} from '../interfaces/component';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private httpClient: HttpClient) { }

  getAll(id: number): Observable<Component[]>{
    return  this.httpClient.get<Component[]>(environment.api + 'components/aquarium/' + id);
  }

  get(id: number): Observable<Component>{
    return  this.httpClient.get<Component>(environment.api + 'components/' + id);
  }

  update(data): Observable<Component>{
    return  this.httpClient.put<Component>(environment.api + 'components/', data);
  }

  post(data): Observable<Component>{
    return  this.httpClient.post<Component>(environment.api + 'components/add', data);
  }

  delete(id: number): Observable<any>{
    return  this.httpClient.delete<any>(environment.api + 'components/' + id);
  }
}

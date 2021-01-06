import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Aquarium} from '../interfaces/aquarium';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AquariumService {

  constructor(private httpClient: HttpClient) { }

  usersAquarium(id): Observable<Aquarium[]> {
    return this.httpClient.get<Aquarium[]>(environment.api + 'aquariums/user/' + id);
  }

  addAquarium(aquarium): Observable<Aquarium> {
    return this.httpClient.post<Aquarium>(environment.api + 'aquariums/add', aquarium);
  }

  deleteAquarium(id): Observable<any> {
    return this.httpClient.delete<any>(environment.api + 'aquariums/' + id);
  }

}

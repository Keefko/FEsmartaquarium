import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AquariumSettings} from '../interfaces/aquariumSettings';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AquariumSettingsService {

  constructor(private httpClient: HttpClient) { }

  get(id: number): Observable<AquariumSettings>{
    return this.httpClient.get<AquariumSettings>(environment.api + 'settings/aquarium/' + id);
  }

  update(data): Observable<AquariumSettings>{
    return this.httpClient.put<AquariumSettings>(environment.api + 'settings/', data);
  }
}

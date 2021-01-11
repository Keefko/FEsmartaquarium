import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MqttBroker} from '../interfaces/mqttBroker';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MqttBrokerService {

  constructor(private httpClient: HttpClient) { }

  get(id: number): Observable<MqttBroker>{
    return this.httpClient.get<MqttBroker>(environment.api + 'broker/' + id);
  }

  update(data): Observable<MqttBroker>{
    return this.httpClient.put<MqttBroker>(environment.api + 'broker/', data);
  }
}

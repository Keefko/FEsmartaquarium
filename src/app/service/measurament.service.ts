import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Timestamp} from 'rxjs';
import {Measurament} from '../interfaces/measurament';
import {environment} from '../../environments/environment';
import {Time} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MeasuramentService {

  constructor(private httpClient: HttpClient) { }

  lastMeasurament(id: number): Observable<Measurament> {
    return this.httpClient.get<Measurament>(environment.api + 'measurament/last/' + id);
  }

  lastAquariumMeasurament(id: number, from: number, to: number): Observable<Measurament[]> {
    return this.httpClient.get<Measurament[]>(environment.api + 'measurament/' + id + '/' + from + '/' + to);
  }

}

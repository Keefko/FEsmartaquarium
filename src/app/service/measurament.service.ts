import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Measurament} from '../interfaces/measurament';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeasuramentService {

  constructor(private httpClient: HttpClient) { }

  lastMeasurament(id: number): Observable<Measurament> {
    return this.httpClient.get<Measurament>(environment.api + 'last/' + id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Configuration, Images } from './types';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationApiService {
  constructor(private readonly http: HttpClient) {}

  public requestConfiguration(): Observable<Images> {
    return this.http
      .get<Configuration>('api/v3/configuration')
      .pipe(map((response) => response.images));
  }
}

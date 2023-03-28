import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { Configuration, Images } from './types';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationApiService {
  constructor(private readonly http: HttpClient) {}

  private configuration$: Observable<Images> = this.http
    .get<Configuration>('api/v3/configuration')
    .pipe(
      shareReplay(),
      map((response) => response.images)
    );

  public requestConfiguration(): Observable<Images> {
    return this.configuration$;
  }
}

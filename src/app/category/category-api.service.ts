import { Injectable } from '@angular/core';
import { Response, Movie, Series, Person } from './types';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryApiService {
  constructor(private readonly http: HttpClient) {}

  public requestCategory(
    name: string,
    period: string
  ): Observable<Array<Movie | Series | Person>> {
    return this.http
      .get<Response<Array<Movie | Series | Person>>>(
        `https://api.themoviedb.org/3/trending/${name}/${period}`
      )
      .pipe(map((response) => response.results));
  }
}

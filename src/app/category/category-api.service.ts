import { Injectable } from '@angular/core';
import { Response, Movie, Series, Person } from './types';
import { HttpClient } from '@angular/common/http';
import { Observable, map, forkJoin } from 'rxjs';

function toMovies<Movie>(arr: Movie[]): Movie[] {
  return arr.map((item) => ({
    ...item,
    media_type: 'movie',
  }));
}

function toSeries<Series>(arr: Series[]): Series[] {
  return arr.map((item) => ({
    ...item,
    media_type: 'tv',
  }));
}

@Injectable({
  providedIn: 'root',
})
export class CategoryApiService {
  constructor(private readonly http: HttpClient) {}

  public requestTrendingCategory(
    name: string,
    period: string
  ): Observable<Array<Movie | Series | Person>> {
    return this.http
      .get<Response<Array<Movie | Series | Person>>>(
        `api/v3/trending/${name}/${period}`
      )
      .pipe(map((response) => response.results));
  }

  public requestUpcomingMovies(): Observable<Array<Movie>> {
    return this.http
      .get<Response<Array<Movie>>>('api/v3/movie/upcoming')
      .pipe(map((response) => response.results));
  }

  private readonly popularMovies$ = this.http
    .get<Response<Array<Movie>>>('api/v3/movie/popular')
    .pipe(map((response) => toMovies(response.results)));

  private readonly popularSeries$ = this.http
    .get<Response<Array<Series>>>('api/v3/tv/popular')
    .pipe(map((response) => toSeries(response.results)));

  public requestPopular(): Observable<Array<Movie | Series>> {
    return forkJoin([this.popularMovies$, this.popularSeries$]).pipe(
      map(
        (response: [Movie[], Series[]]): Array<Movie | Series> =>
          response.flat()
      )
    );
  }
}

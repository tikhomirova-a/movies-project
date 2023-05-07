import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from '../category/types';
import { Response } from '../infrastructure/http/types';
import { Genre } from '../media-details/types';
import { Genres } from './types';

@Injectable({
  providedIn: 'root',
})
export class MovieListApiService {
  constructor(private readonly http: HttpClient) {}

  public discoverMovies(): Observable<Array<Movie>> {
    return this.http
      .get<Response<Array<Movie>>>('api/v3/discover/movie')
      .pipe(map((response) => response.results));
  }

  public getGenres(): Observable<Array<Genre>> {
    return this.http
      .get<Genres>('api/v3//genre/movie/list')
      .pipe(map((response) => response.genres));
  }
}

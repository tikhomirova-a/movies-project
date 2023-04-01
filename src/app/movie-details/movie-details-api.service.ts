import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDetails, Credits } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsApiService {
  constructor(private readonly http: HttpClient) {}

  public requestMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`api/v3/movie/${id}`);
  }

  public requestMovieCredits(id: string): Observable<Credits> {
    return this.http.get<Credits>(`api/v3/movie/${id}/credits`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDetails, Credits, SeriesDetails } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailsApiService {
  constructor(private readonly http: HttpClient) {}

  public requestMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`api/v3/movie/${id}`);
  }

  public requestSeriesDetails(id: string): Observable<SeriesDetails> {
    return this.http.get<SeriesDetails>(`api/v3/tv/${id}`);
  }

  public requestCredits(id: string, type: 'movie' | 'tv'): Observable<Credits> {
    return this.http.get<Credits>(`api/v3/${type}/${id}/credits`);
  }
}

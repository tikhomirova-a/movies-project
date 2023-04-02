import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDetails, Credits, SeriesDetails } from './types';
import { Observable, map } from 'rxjs';

function addMediaType<T>(details: T, type: 'movie' | 'tv'): T {
  return {
    ...details,
    media_type: type,
  };
}

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsApiService {
  constructor(private readonly http: HttpClient) {}

  public requestDetails(
    id: string,
    type: 'movie' | 'tv'
  ): Observable<MovieDetails | SeriesDetails> {
    return this.http
      .get<MovieDetails | SeriesDetails>(`api/v3/${type}/${id}`)
      .pipe(map((response) => addMediaType(response, type)));
  }

  public requestCredits(id: string, type: 'movie' | 'tv'): Observable<Credits> {
    return this.http.get<Credits>(`api/v3/${type}/${id}/credits`);
  }
}

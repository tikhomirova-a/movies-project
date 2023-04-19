import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credits, MovieDetails } from '../types';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor(private readonly http: HttpClient) {}

  public requestDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`api/v3/movie/${id}`);
  }

  public requestCredits(id: string): Observable<Credits> {
    return this.http.get<Credits>(`api/v3/movie/${id}/credits`);
  }
}

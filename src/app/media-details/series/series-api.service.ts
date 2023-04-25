import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credits, SeriesDetails } from '../types';

@Injectable({
  providedIn: 'root',
})
export class SeriesApiService {
  constructor(private readonly http: HttpClient) {}

  public requestDetails(id: string): Observable<SeriesDetails> {
    return this.http.get<SeriesDetails>(`api/v3/tv/${id}`);
  }

  public requestCredits(id: string): Observable<Credits> {
    return this.http.get<Credits>(`api/v3/tv/${id}/credits`);
  }
}

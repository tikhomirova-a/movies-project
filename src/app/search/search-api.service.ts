import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from './types';

@Injectable({
  providedIn: 'root',
})
export class SearchApiService {
  constructor(private readonly http: HttpClient) {}

  public search(query: string): Observable<Search> {
    return this.http.get<Search>(`api/v3/search/multi`, {
      params: new HttpParams({
        fromObject: {
          query: query,
        },
      }),
    });
  }
}

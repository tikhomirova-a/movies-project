import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonDetailsWCredits } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonDetailsApiService {
  constructor(private readonly http: HttpClient) {}

  public requestPersonDetails(id: string): Observable<PersonDetailsWCredits> {
    return this.http.get<PersonDetailsWCredits>(`api/v3/person/${id}`, {
      params: new HttpParams({
        fromObject: {
          append_to_response: 'combined_credits',
        },
      }),
    });
  }
}

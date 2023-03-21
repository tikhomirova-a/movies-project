import { Injectable } from '@angular/core';
import { Movie, Series, Person } from './types';

@Injectable({
  providedIn: 'root',
})
export class CategoryApiService {
  public async requestCategory(
    name: string,
    period: string
  ): Promise<Array<Movie | Series | Person>> {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/${name}/${period}?api_key=09f328da5aa5d91f51978506a62cc80e`
    );
    const json = await response.json();
    return json.results;
  }
}

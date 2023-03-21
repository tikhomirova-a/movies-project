import { Component } from '@angular/core';
import { Movie, Series, Person } from './types';

@Component({
  selector: 'ez-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  public categories$ = this.requestCategory('all', 'day');

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

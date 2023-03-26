import { Component } from '@angular/core';
import { ConfigurationApiService } from '../infrastructure/configuration/configuration-api.service';
import { CategoryApiService } from './category-api.service';
import { Movie, Person, Series } from './types';

@Component({
  selector: 'ez-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  constructor(
    private categoryApi: CategoryApiService,
    private configApi: ConfigurationApiService
  ) {}

  public imagesConfig$ = this.configApi.requestConfiguration();

  public trendingContent$ = this.categoryApi.requestTrendingCategory(
    'all',
    'day'
  );

  public popularContent$ = this.categoryApi.requestPopular();

  public upcomingContent$ = this.categoryApi.requestUpcomingMovies();

  public trackCategory(
    _: number,
    element: Movie | Series | Person
  ): Movie['id'] | Series['id'] | Person['id'] {
    return element.id;
  }
}

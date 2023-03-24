import { Component } from '@angular/core';
import { ConfigurationApiService } from '../infrastructure/configuration/configuration-api.service';
import { CategoryApiService } from './category-api.service';

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

  public trendingContent$ = this.categoryApi.requestCategory('all', 'day');
}

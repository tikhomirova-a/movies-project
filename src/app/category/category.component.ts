import { Component } from '@angular/core';
import { TrendingCategoryApiService } from './category-api.service';

@Component({
  selector: 'ez-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  constructor(private api: TrendingCategoryApiService) {}

  public categories$ = this.api.requestCategory('all', 'day');
}

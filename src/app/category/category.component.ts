import { Component } from '@angular/core';
import { CategoryApiService } from './category-api.service';

@Component({
  selector: 'ez-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  constructor(private api: CategoryApiService) {}

  public trendingContent$ = this.api.requestCategory('all', 'day');
}

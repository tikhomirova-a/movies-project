import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { UiCardsModule } from '../ui';
import { SearchModule } from '../search';

@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, UiCardsModule, SearchModule],
  exports: [CategoryComponent],
})
export class CategoryModule {}

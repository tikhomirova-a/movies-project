import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { UiCardsModule } from '../ui';

@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, UiCardsModule],
  exports: [CategoryComponent],
})
export class CategoryModule {}

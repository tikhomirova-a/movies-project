import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [CategoryComponent, MovieCardComponent],
  imports: [CommonModule],
  exports: [CategoryComponent],
})
export class CategoryModule {}

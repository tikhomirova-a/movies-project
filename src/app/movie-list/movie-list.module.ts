import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { UiCardsModule } from '../ui';

@NgModule({
  declarations: [MovieListComponent],
  imports: [CommonModule, UiCardsModule],
})
export class MovieListModule {}

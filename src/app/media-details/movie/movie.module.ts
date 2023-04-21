import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsModule } from '../sections';
import { ImageModule } from '../../ui/image';
import { RouterModule } from '@angular/router';
import { MovieCreditsComponent } from './movie-credits/movie-credits.component';
import { MovieComponent } from './movie/movie.component';
import { UiCardsModule } from '../../ui';

@NgModule({
  declarations: [MovieComponent, MovieCreditsComponent],
  imports: [
    CommonModule,
    SectionsModule,
    ImageModule,
    RouterModule,
    UiCardsModule,
  ],
  exports: [MovieComponent],
})
export class MovieModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDetailsModule } from '../base-details';
import { ImageModule } from '../../ui/image';
import { RouterModule } from '@angular/router';
import { MovieCreditsComponent } from './movie-credits/movie-credits.component';
import { MovieComponent } from './movie/movie.component';
import { UiCardsModule } from 'src/app/ui';

@NgModule({
  declarations: [MovieComponent, MovieCreditsComponent],
  imports: [
    CommonModule,
    BaseDetailsModule,
    ImageModule,
    RouterModule,
    UiCardsModule,
  ],
  exports: [MovieComponent],
})
export class MovieModule {}

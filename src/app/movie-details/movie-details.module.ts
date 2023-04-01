import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { ImageModule } from '../ui/image';
import { UiCardsModule } from '../ui';

@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [CommonModule, ImageModule, UiCardsModule],
  exports: [MovieDetailsComponent],
})
export class MovieDetailsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ImageComponent } from './image/image.component';
import { ImageSourcePipe } from './image-source.pipe';

@NgModule({
  declarations: [MovieCardComponent, ImageSourcePipe, ImageComponent],
  imports: [CommonModule],
  exports: [MovieCardComponent],
})
export class UiCardsModule {}

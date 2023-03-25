import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ImageComponent } from './image/image.component';
import { ImageSourcePipe } from './image-source.pipe';
import { SeriesCardComponent } from './series-card/series-card.component';
import { PersonCardComponent } from './person-card/person-card.component';

@NgModule({
  declarations: [
    MovieCardComponent,
    ImageSourcePipe,
    ImageComponent,
    SeriesCardComponent,
    PersonCardComponent,
  ],
  imports: [CommonModule],
  exports: [MovieCardComponent, SeriesCardComponent, PersonCardComponent],
})
export class UiCardsModule {}

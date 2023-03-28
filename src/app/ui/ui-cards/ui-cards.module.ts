import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ImageComponent } from './image/image.component';
import { ImageSourcePipe } from './image-source.pipe';
import { CardDetailsComponent } from './card-details/card-details.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SeriesCardComponent } from './series-card/series-card.component';
import { PersonCardComponent } from './person-card/person-card.component';

@NgModule({
  declarations: [
    CardComponent,
    ImageSourcePipe,
    ImageComponent,
    CardDetailsComponent,
    MovieCardComponent,
    SeriesCardComponent,
    PersonCardComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    ImageComponent,
    CardDetailsComponent,
    MovieCardComponent,
    SeriesCardComponent,
    PersonCardComponent,
  ],
})
export class UiCardsModule {}

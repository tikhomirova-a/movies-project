import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SeriesCardComponent } from './series-card/series-card.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { ImageModule } from '../image';

@NgModule({
  declarations: [
    CardComponent,
    CardDetailsComponent,
    MovieCardComponent,
    SeriesCardComponent,
    PersonCardComponent,
  ],
  imports: [CommonModule, RouterLink, ImageModule],
  exports: [
    CardComponent,
    CardDetailsComponent,
    MovieCardComponent,
    SeriesCardComponent,
    PersonCardComponent,
  ],
})
export class UiCardsModule {}

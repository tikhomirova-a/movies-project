import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ImageModule } from '../ui/image';
import { UiCardsModule } from '../ui';
import { DetailsSectionComponent } from './details-section/details-section.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { CastSectionComponent } from './cast-section/cast-section.component';
import { CrewSectionComponent } from './crew-section/crew-section.component';

@NgModule({
  declarations: [
    MovieDetailsComponent,
    DetailsSectionComponent,
    SeriesDetailsComponent,
    CastSectionComponent,
    CrewSectionComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
    UiCardsModule,
    RouterOutlet,
    RouterLink,
    RouterModule,
  ],
  exports: [MovieDetailsComponent],
})
export class DetailsModule {}

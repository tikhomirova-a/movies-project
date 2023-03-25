import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ImageSourcesModule } from 'src/app/infrastructure/image-sources/image-sources.module';

@NgModule({
  declarations: [MovieCardComponent],
  imports: [CommonModule, ImageSourcesModule],
  exports: [MovieCardComponent],
})
export class UiCardsModule {}

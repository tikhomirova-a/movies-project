import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series/series.component';
import { SeriesCreditsComponent } from './series-credits/series-credits.component';
import { ImageModule } from '../../ui/image';
import { SectionsModule } from '../sections';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SeriesComponent, SeriesCreditsComponent],
  imports: [CommonModule, ImageModule, SectionsModule, RouterModule],
})
export class SeriesModule {}

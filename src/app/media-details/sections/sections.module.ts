import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ImageModule } from '../../ui/image';
import { CreditsComponent } from './credits/credits.component';
import { UiCardsModule } from 'src/app/ui';
import { BaseDetailsComponent } from './base-details/base-details.component';

@NgModule({
  declarations: [BaseDetailsComponent, CreditsComponent],
  imports: [CommonModule, RouterLink, ImageModule, UiCardsModule],
  exports: [BaseDetailsComponent, CreditsComponent],
})
export class SectionsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailsComponent } from './person-details.component';
import { UiCardsModule } from '../ui';
import { ImageModule } from '../ui/image';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [PersonDetailsComponent],
  exports: [PersonDetailsComponent],
  imports: [CommonModule, UiCardsModule, ImageModule, RouterLink],
})
export class PersonDetailsModule {}

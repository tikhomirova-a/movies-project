import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailsComponent } from './person-details.component';
import { UiCardsModule } from '../ui';
import { ImageModule } from '../ui/image';

@NgModule({
  declarations: [PersonDetailsComponent],
  exports: [PersonDetailsComponent],
  imports: [CommonModule, UiCardsModule, ImageModule],
})
export class PersonDetailsModule {}

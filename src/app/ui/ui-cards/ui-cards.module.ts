import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ImageComponent } from './image/image.component';
import { ImageSourcePipe } from './image-source.pipe';
import { CardDetailsComponent } from './card-details/card-details.component';

@NgModule({
  declarations: [
    CardComponent,
    ImageSourcePipe,
    ImageComponent,
    CardDetailsComponent,
  ],
  imports: [CommonModule],
  exports: [CardComponent, ImageComponent, CardDetailsComponent],
})
export class UiCardsModule {}

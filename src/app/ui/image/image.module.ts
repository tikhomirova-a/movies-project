import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageSourcePipe } from './image-source.pipe';
import { ImageComponent } from './image.component';

@NgModule({
  declarations: [ImageComponent, ImageSourcePipe],
  imports: [CommonModule],
  exports: [ImageComponent, ImageSourcePipe],
})
export class ImageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDetailsComponent } from './base-details.component';
import { RouterLink } from '@angular/router';
import { ImageModule } from '../../ui/image';

@NgModule({
  declarations: [BaseDetailsComponent],
  imports: [CommonModule, RouterLink, ImageModule],
  exports: [BaseDetailsComponent],
})
export class BaseDetailsModule {}

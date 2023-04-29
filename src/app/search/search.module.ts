import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { UiCardsModule } from '../ui';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, UiCardsModule, ReactiveFormsModule],
  exports: [SearchComponent],
})
export class SearchModule {}

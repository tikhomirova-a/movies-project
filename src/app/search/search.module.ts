import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { UiCardsModule } from '../ui';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, UiCardsModule],
  exports: [SearchComponent],
})
export class SearchModule {}

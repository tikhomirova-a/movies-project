import { Component, Input } from '@angular/core';
import { Series } from '../../../category/types';

@Component({
  selector: 'ez-series-card',
  templateUrl: './series-card.component.html',
  styles: [':host { display: contents; }'],
})
export class SeriesCardComponent {
  @Input() public series?: Series;
}

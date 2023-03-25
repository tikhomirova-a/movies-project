import { Component, Input } from '@angular/core';
import { Images } from '../../../infrastructure/configuration/types';
import { Series } from 'src/app/category/types';

@Component({
  selector: 'ez-series-card',
  templateUrl: './series-card.component.html',
  styleUrls: ['./series-card.component.scss'],
})
export class SeriesCardComponent {
  @Input() series?: Series;
  @Input() public config?: Images;
  public readonly imageWidth = 180;
  public readonly aspectRatio = 1.5;
}

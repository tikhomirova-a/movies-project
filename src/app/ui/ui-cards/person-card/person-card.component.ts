import { Component, Input } from '@angular/core';
import { Person } from '../../../category/types';
import { Images } from '../../../infrastructure/configuration/types';

@Component({
  selector: 'ez-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class PersonCardComponent {
  @Input() person?: Person;
  @Input() config?: Images;
  public readonly imageWidth = 180;
  public readonly aspectRatio = 1.5;
}

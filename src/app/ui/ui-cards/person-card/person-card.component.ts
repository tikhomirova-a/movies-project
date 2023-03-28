import { Component, Input } from '@angular/core';
import { Person } from '../../../category/types';

@Component({
  selector: 'ez-person-card',
  templateUrl: './person-card.component.html',
  styles: [':host { display: contents; }'],
})
export class PersonCardComponent {
  @Input() public person?: Person;
}

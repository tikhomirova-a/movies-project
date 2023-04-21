import { Component, Input } from '@angular/core';
import { Person } from '../../../category/types';

@Component({
  selector: 'ez-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
})
export class CreditsComponent {
  @Input() public cast?: Array<Person>;
  @Input() public crew?: Array<Person>;

  public trackPerson(_: number, person: Person): Person['id'] {
    return person.id;
  }
}

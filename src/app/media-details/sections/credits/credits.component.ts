import { Component, Input } from '@angular/core';
import { Person } from '../../../category/types';
import { Credits } from '../../types';

@Component({
  selector: 'ez-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
})
export class CreditsComponent {
  @Input() public credits?: Credits | null = null;

  public trackPerson(_: number, person: Person): Person['id'] {
    return person.id;
  }
}

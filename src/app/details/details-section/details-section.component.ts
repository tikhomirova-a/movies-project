import { Component, Input } from '@angular/core';
import { Genre } from '../types';

@Component({
  selector: 'ez-details-section',
  templateUrl: './details-section.component.html',
  styleUrls: ['./details-section.component.scss'],
})
export class DetailsSectionComponent {
  @Input() public title = '';
  @Input() public genres?: Genre[];
  @Input() public overview = '';
  @Input() public date?: Date;
  @Input() public backdrop?: string;
}

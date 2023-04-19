import { Component, Input } from '@angular/core';
import { Genre } from '../types';

@Component({
  selector: 'ez-base-details',
  templateUrl: './base-details.component.html',
  styleUrls: ['./base-details.component.scss'],
})
export class BaseDetailsComponent {
  @Input() public title = '';
  @Input() public genres?: Genre[];
  @Input() public overview = '';
  @Input() public date?: Date;
  @Input() public backdrop?: string;
}

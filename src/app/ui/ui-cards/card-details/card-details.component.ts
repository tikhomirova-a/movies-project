import { Component, Input } from '@angular/core';

@Component({
  selector: 'ez-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent {
  @Input() public title = '';
  @Input() public rating?: number;
  @Input() public date?: Date;
}

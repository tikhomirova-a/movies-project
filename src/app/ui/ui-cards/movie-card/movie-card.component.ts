import { Component, Input } from '@angular/core';
import { Movie } from '../../../category/types';

@Component({
  selector: 'ez-movie-card',
  templateUrl: './movie-card.component.html',
  styles: [':host { display: contents; }'],
})
export class MovieCardComponent {
  @Input() public movie?: Movie;
}

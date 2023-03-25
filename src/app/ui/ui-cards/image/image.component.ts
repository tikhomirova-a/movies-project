import { Component, HostBinding, Input } from '@angular/core';
import { Images } from '../../../infrastructure/configuration/types';

@Component({
  selector: 'ez-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input() public path?: string;
  @Input() public type?: 'poster' | 'backdrop' | 'profile';
  @Input() public aspectRatio = 1.5;
  @Input() public title?: string;
  @Input() public config?: Images;

  @HostBinding('style.width.px') @Input() public width = 180;
  @HostBinding('style.height.px') height = this.width * this.aspectRatio;
}

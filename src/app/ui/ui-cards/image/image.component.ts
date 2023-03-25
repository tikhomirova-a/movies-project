import { Component, Input } from '@angular/core';
import { ConfigurationApiService } from 'src/app/infrastructure/configuration/configuration-api.service';

@Component({
  selector: 'ez-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  constructor(private readonly config: ConfigurationApiService) {}

  @Input() public path?: string;
  @Input() public type?: 'poster' | 'backdrop' | 'profile';
  @Input() public width = 180;
  @Input() public aspectRatio = 1.5;
  @Input() public title?: string;

  public readonly imagesConfig$ = this.config.requestConfiguration();
}

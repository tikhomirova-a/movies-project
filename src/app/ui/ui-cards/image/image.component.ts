import { Component, HostBinding, Input } from '@angular/core';
import { ConfigurationApiService } from 'src/app/infrastructure/configuration/configuration-api.service';
import { Images } from '../../../infrastructure/configuration/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'ez-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  constructor(private configurationApi: ConfigurationApiService) {}

  public config$: Observable<Images> =
    this.configurationApi.requestConfiguration();

  @Input() public path?: string;
  @Input() public type?: 'poster' | 'backdrop' | 'profile';
  @Input() public aspectRatio = 1.5;
  @Input() public title?: string;

  @HostBinding('style.width.px') @Input() public width = 180;
  @HostBinding('style.height.px') height = this.width * this.aspectRatio;
}

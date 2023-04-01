import { Component, HostBinding, Input } from '@angular/core';
import { ConfigurationApiService } from '../../infrastructure/configuration/configuration-api.service';
import { Images } from '../../infrastructure/configuration/types';
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
  @Input() public title?: string;

  @HostBinding('style.minWidth.px') @Input() public width = 180;
  @HostBinding('style.--ez-img-aspect-ratio')
  @Input()
  public aspectRatio = 180 / 270;
}

import { Pipe, PipeTransform } from '@angular/core';
import { Images } from 'src/app/infrastructure/configuration/types';

@Pipe({
  name: 'imageSource',
})
export class ImageSourcePipe implements PipeTransform {
  transform(
    imgPath: string,
    imgWidth: number,
    config: Images,
    type: 'backdrop' | 'poster' | 'profile'
  ): string {
    const sizes = config[`${type}_sizes`];

    let imgSize = sizes[0];

    for (const size of sizes) {
      if (size === 'original') {
        imgSize = 'original';
      }
      if (Number(size.substring(1)) >= imgWidth) {
        imgSize = size;
        break;
      }
    }

    return `${config.secure_base_url}${imgSize}${imgPath}`;
  }
}

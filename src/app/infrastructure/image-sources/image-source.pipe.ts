import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSource',
})
export class ImageSourcePipe implements PipeTransform {
  transform(
    imgPath: string,
    baseUrl: string,
    sizes: string[],
    imgWidth: number
  ): string {
    let imgSize = sizes[0];
    for (const size of sizes) {
      if (size === 'original') {
        imgSize = 'original';
      }
      if (Number(size.substring(1)) > imgWidth) {
        imgSize = size;
        break;
      }
    }

    return `${baseUrl}${imgSize}${imgPath}`;
  }
}

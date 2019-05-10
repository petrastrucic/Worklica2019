import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forceToThird'
})
export class ForceToThirdPipe implements PipeTransform {

  transform(value: number): number {
    return Math.pow(value, 3);
  }

}

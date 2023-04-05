import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimeterToMeters',
})
export class DecimeterToMetersPipe implements PipeTransform {
  transform(decimeters: number, ...args: unknown[]): string {
    return (decimeters * 0.1).toFixed(2) + ' metros';
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hectogramToKilogram',
})
export class HectogramToKilogramPipe implements PipeTransform {
  transform(hectogram: number, ...args: unknown[]): string {
    return ((hectogram * 0.1).toFixed(2) + ' Kilogramos').toString();
  }
}

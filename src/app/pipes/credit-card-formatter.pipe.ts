import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter'
})
export class CreditCardFormatterPipe implements PipeTransform {
  transform(value: string): string {
    const correctLength = 16;
    if (value.length !== correctLength) {
      return 'Incorrect length';
    }

    if (!/^\d+$/.test(value)) {
      return 'Incorrect characters';
    }

    // @ts-ignore
    return value.match(/[\s\S]{1,4}/g).join('-');
  }
}

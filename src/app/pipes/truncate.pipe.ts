import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, length = 100): string {
    const string = value.slice(0, length);
    return value.length < length ? string : string + '...';
  }
}

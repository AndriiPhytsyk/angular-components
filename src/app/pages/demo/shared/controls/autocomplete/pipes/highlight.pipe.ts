import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, searchTerm: string): string {
    const re = new RegExp(searchTerm, 'gi');
    return value.replace(re, match => '<b>' + match + '</b>');
  }
}

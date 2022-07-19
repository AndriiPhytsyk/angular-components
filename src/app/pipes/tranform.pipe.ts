import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilterTerm'
})
export class FilterTermPipe implements PipeTransform {
  transform(value: string[], searchTerm: string): string[] {
    return value.filter(v =>
      v.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}

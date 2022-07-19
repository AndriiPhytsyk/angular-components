import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
  pure: false
})
export class FlattenPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return this.flatten(value);
  }

  private flatten(flattenData: any[]): any[] {
    const result: any[] = [];
    flattenData.forEach(value => {
      if (Array.isArray(value)) {
        result.push(...this.flatten(value));
      } else {
        result.push(value);
      }
    });
    return result;
  }
}

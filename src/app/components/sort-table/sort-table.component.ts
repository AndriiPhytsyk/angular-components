import { Component } from '@angular/core';

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss']
})
export class SortTableComponent {
  public tableData = [
    { name: 'Andrii 1', date: '10/25/88', age: 34, living: true },
    { name: 'Andrii 2', date: '10/25/89', age: 33, living: true },
    { name: 'Andrii 3', date: '10/25/34', age: 88, living: false },
    { name: 'Andrii 4', date: '10/25/56', age: 66, living: true }
  ];

  public sortDirection = true;

  sort(headerData: { key: string; value: any }) {
    const { key, value } = headerData;

    this.sortDirection = !this.sortDirection;

    switch (true) {
      case typeof value === 'boolean':
        this.sortBoolean(key);
        break;
      case typeof value === 'string':
        this.sortStrings(key);
        break;
      case this.isDate(value):
        this.sortDate(key);
        break;
      case typeof value === 'number':
        this.sortNumbers(key);
        break;
    }
  }

  private isDate(value: any): boolean {
    const parsedDate = Date.parse(value);
    return isNaN(value) && !isNaN(parsedDate);
  }

  private sortDate(key: any): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return (
          new Date(value1[key]).getTime() - new Date(value2[key]).getTime()
        );
      } else {
        return (
          new Date(value2[key]).getTime() - new Date(value1[key]).getTime()
        );
      }
    });
  }

  private sortBoolean(key: string): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return Number(value1[key]) - Number(value2[key]);
      } else {
        return Number(Number(value2[key]) - Number(value1[key]));
      }
    });
  }

  private sortStrings(key: string): void {
    this.tableData.sort((value1: any, value2: any) => {
      const value1UpperCased = value1[key]?.toString().toUpperCase() || '';
      const value2UpperCased = value2[key]?.toString().toUpperCase() || '';
      if (this.sortDirection) {
        if (value1UpperCased > value2UpperCased) {
          return -1;
        } else if (value2UpperCased > value1UpperCased) {
          return 1;
        }
        return 0;
      } else {
        if (value1UpperCased > value2UpperCased) {
          return 1;
        } else if (value2UpperCased > value1UpperCased) {
          return -1;
        }
        return 0;
      }
    });
  }

  private sortNumbers(key: string) {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return Number(value1[key]) - Number(value2[key]);
      } else {
        return Number(Number(value2[key]) - Number(value1[key]));
      }
    });
  }
}

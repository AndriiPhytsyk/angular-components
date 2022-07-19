import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent {
  @Input() tableData: any[] = [];

  @Output() headerSelected = new EventEmitter<{ key: string; value: any }>();

  public selectHeader(key: any, value: any): void {
    this.headerSelected.emit({ key, value });
  }
}

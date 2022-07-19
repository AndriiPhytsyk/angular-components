import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabItem } from './tab.model';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() tabsItems: TabItem[] = [];
  @Input() selectedIndex = 1;
  @Output() selectedChange: EventEmitter<number> = new EventEmitter<number>();

  selectTab(selected: TabItem, i: number): void {
    this.tabsItems.forEach(tab => {
      tab.isSelected = selected === tab;
    });

    this.selectedChange.emit(i);
  }
}

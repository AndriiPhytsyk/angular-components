import { Component, Input } from '@angular/core';
import { AccordionItem } from './accordion-item.interface';
// TODO add more animations
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];

  public toggle(accordionItem: AccordionItem): void {
    accordionItem.isExpanded = !accordionItem.isExpanded;
  }
}

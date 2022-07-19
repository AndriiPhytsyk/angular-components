import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fieldset-toggle',
  templateUrl: './fieldset-toggle.component.html',
  styleUrls: ['./fieldset-toggle.component.scss']
})
export class FieldsetToggleComponent {
  @Input() legend = '';
  @Input() isOpen = true;

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }
}

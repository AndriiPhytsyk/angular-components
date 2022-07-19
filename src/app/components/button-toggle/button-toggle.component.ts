import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonMeta } from './button-meta.model';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent {
  @Input() options: ButtonMeta[] = [];
  @Input() multipleSelection = false;
  @Output() selection = new EventEmitter<ButtonMeta[]>();
  public selectedOptionIds: any[] = [];

  public selected(selectedOption: ButtonMeta): void {
    if (!this.multipleSelection) {
      this.options.forEach(option => {
        option.isActive =
          selectedOption === option &&
          !this.selectedOptionIds.includes(selectedOption.id);
      });
    } else {
      selectedOption.isActive = !this.selectedOptionIds.includes(
        selectedOption.id
      );
    }

    this.selectedOptionIds = this.options
      .filter(option => option.isActive)
      .map(option => option.id);

    this.selection.emit(this.selectedOptionIds);
  }
}

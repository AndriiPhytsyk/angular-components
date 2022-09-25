import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlItem, Value } from '../../../models/frontend';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxesComponent),
      multi: true
    }
  ]
})
export class CheckboxesComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Output() changed = new EventEmitter<Value[]>();
  @Input() items: ControlItem[] = [];

  isDisabled = false;

  value: Value[] = [];

  constructor() {}

  private propagateChange: any = () => {};

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  writeValue(value: Value[]): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  registerOnTouched(fn: any): void {}

  onChanged(value: Value, event: any) {
    const checked = event?.target?.checked;
    const selected = this.getSelected(value, checked);
    this.value = selected;
    this.propagateChange(selected);
    this.changed.emit(selected);
  }

  private getSelected(value: Value, checked: boolean) {
    const selected: Value[] = this.value ? [...this.value] : [];
    if (checked) {
      if (!selected.includes(value)) {
        selected.push(value);
      }
    } else {
      const index = selected.indexOf(value);
      selected.splice(index, 1);
    }
    return selected.length ? selected : [];
  }

  isChecked(value: Value): boolean {
    return this.value && this.value.includes(value);
  }
}

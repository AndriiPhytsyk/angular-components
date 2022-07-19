import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ToggleComponent
    }
  ]
})
export class ToggleComponent implements ControlValueAccessor {
  @Input() isOn = false;

  onChange = (isOn: boolean) => {};

  onTouched = () => {};

  touched = false;

  toggle() {
    this.isOn = !this.isOn;
    this.onChange(this.isOn);
  }

  writeValue(isOn: boolean) {
    console.log(isOn);
    this.markAsTouched();
    this.isOn = isOn;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }
}

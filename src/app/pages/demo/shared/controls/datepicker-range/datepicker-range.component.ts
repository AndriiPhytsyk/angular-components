import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface Value {
  from: number;
  to: number;
}

export interface Placeholder {
  from: string;
  to: string;
}

@Component({
  selector: 'app-datepicker-range',
  templateUrl: './datepicker-range.component.html',
  styleUrls: ['./datepicker-range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerRangeComponent),
      multi: true
    }
  ]
})
export class DatepickerRangeComponent implements OnInit {
  @Input() placeholder: Placeholder = {} as Placeholder;
  @Output() changed = new EventEmitter<Value>();

  form!: FormGroup;

  isDisabled = false;

  value!: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      from: [null],
      to: [null]
    });
  }

  get min(): Date | null {
    const from = this.form.controls['from'].value;
    return from ? new Date(from) : null;
  }

  get max(): Date | null {
    const to = this.form.controls['to'].value;
    return to ? new Date(to) : null;
  }

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  writeValue(value: Value): void {
    this.form.patchValue(value || {});
  }

  setDisabledState(isDisabled: boolean) {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  onClosed(): void {
    this.propagateTouched();
  }

  onChange() {
    const value = { ...this.form.value };
    this.propagateChange(value);
    this.changed.emit();
  }
}

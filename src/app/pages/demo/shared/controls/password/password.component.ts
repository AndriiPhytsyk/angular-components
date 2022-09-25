import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type PasswordType = 'text' | 'password';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true
    }
  ]
})
export class PasswordComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string = '';
  @Output() changed = new EventEmitter<string>();
  passwordType: PasswordType;

  isDisabled = false;

  value: string = '';

  constructor() {
    this.passwordType = 'password';
  }

  ngOnInit(): void {}

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  writeValue(value: string): void {
    console.log(value);
    this.value = value;
  }

  onKeyUp(value: string): void {
    this.value = value;
    this.propagateChange(value);
    this.changed.emit();
  }

  onBlur(): void {
    this.propagateTouched();
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  public togglePassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }
}

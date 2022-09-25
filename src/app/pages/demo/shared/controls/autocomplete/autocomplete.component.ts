import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import {
  distinctUntilChanged,
  filter,
  map,
  Observable,
  startWith,
  Subject,
  takeUntil
} from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ControlItem, Value } from '../../../models/frontend';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AutocompleteComponent,
      multi: true
    }
  ]
})
export class AutocompleteComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  @Input() placeholder = '';
  @Input() items: ControlItem[] = [];
  @Output() changed = new EventEmitter<Value>();

  formControl: FormControl = new FormControl();

  options$!: Observable<ControlItem[] | undefined>;
  private destroy = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.items);
    this.options$ = this.formControl.valueChanges.pipe(
      startWith(''),
      filter(value => typeof value === 'string' || typeof value === 'object'),
      map(value => (typeof value === 'string' ? value : value.label)),
      map(label => (label ? this.filter(label) : this.items.slice()))
    );

    // this.options$.subscribe(res => console.log(res));

    this.formControl.valueChanges
      .pipe(takeUntil(this.destroy), distinctUntilChanged())
      .subscribe(item => {
        const value = typeof item === 'object' ? item.value : null;
        this.propagateChange(value);
        this.changed.emit(value);
      });

    this.formControl.valueChanges.subscribe(res => console.log(res));
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
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
    const selectedOption = this.items.find(item => item.value === value);
    this.formControl.setValue(selectedOption);
  }

  setDisabledState(isDisabled: boolean) {
    if (isDisabled) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
  }

  displayFn(item?: ControlItem): string {
    return item ? item.label : '';
  }

  private filter(value: string): ControlItem[] {
    const filteredValue = value.toLowerCase();
    return this.items.filter(item =>
      item.label.toLowerCase().includes(filteredValue)
    );
  }

  onBlur(): void {
    this.propagateTouched();
  }

  change(event: MatAutocompleteSelectedEvent) {
    console.log('event');
  }
}

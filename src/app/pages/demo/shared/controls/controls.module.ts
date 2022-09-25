import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';
import { SelectModule } from './select/select.module';
import { PasswordModule } from './password/password.module';
import { CheckboxesModule } from './checkboxes/checkboxes.module';
import { RadiosModule } from './radios/radios.module';
import { DatepickerModule } from './datepicker/datepicker.module';
import { DatepickerRangeModule } from './datepicker-range/datepicker-range.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    SelectModule,
    PasswordModule,
    CheckboxesModule,
    RadiosModule,
    DatepickerModule,
    DatepickerRangeModule,
    AutocompleteModule
  ],
  exports: [
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule,
    DatepickerModule,
    DatepickerRangeModule,
    AutocompleteModule
  ]
})
export class ControlsModule {}

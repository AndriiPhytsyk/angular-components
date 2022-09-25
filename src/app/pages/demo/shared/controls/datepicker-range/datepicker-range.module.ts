import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerRangeComponent } from './datepicker-range.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule } from '../datepicker/datepicker.module';

@NgModule({
  declarations: [DatepickerRangeComponent],
  imports: [CommonModule, ReactiveFormsModule, DatepickerModule],
  exports: [DatepickerRangeComponent]
})
export class DatepickerRangeModule {}

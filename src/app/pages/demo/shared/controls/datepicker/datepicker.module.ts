import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DatepickerComponent],
  imports: [CommonModule, FormsModule, MatDatepickerModule, MatIconModule],
  exports: [DatepickerComponent]
})
export class DatepickerModule {}

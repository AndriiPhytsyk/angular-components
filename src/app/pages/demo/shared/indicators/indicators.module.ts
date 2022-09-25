import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSpinnerModule } from './spinner/spinner.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CustomSpinnerModule],
  exports: [CustomSpinnerModule]
})
export class IndicatorsModule {}

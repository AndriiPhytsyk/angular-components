import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentDocumentationRoutingModule } from './component-documentation.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ComponentDocumentationRoutingModule,
    ReactiveFormsModule
  ]
})
export class ComponentDocumentationModule {}

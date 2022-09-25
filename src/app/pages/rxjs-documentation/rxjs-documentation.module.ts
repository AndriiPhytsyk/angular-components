import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsDocumentationComponent } from './rxjs-documentation.component';
import { RxjsDocumentationRoutingModule } from './rxjs-documentation.routing.module';

@NgModule({
  declarations: [RxjsDocumentationComponent],
  imports: [CommonModule, RxjsDocumentationRoutingModule]
})
export class RxjsDocumentationModule {}

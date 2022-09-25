import { NgModule } from '@angular/core';
import { JsDocumentationRoutingModule } from './js-documentation-routing.module';
import { JsDocumentationComponent } from './js-documentation.component';

@NgModule({
  declarations: [JsDocumentationComponent],
  imports: [JsDocumentationRoutingModule]
})
export class JsDocumentationModule {}

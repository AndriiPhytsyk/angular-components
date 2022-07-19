import { NgModule } from '@angular/core';
import { JsDocumentationComponent } from './js-documentation.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: JsDocumentationComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsDocumentationRoutingModule {}

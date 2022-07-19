import { NgModule } from '@angular/core';
import { DirectivesDocumentationComponent } from './directives-documentation.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: DirectivesDocumentationComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesDocumentationRoutingModule {}

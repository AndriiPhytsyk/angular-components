import { NgModule } from '@angular/core';
import { PipesDocumentationComponent } from './pipes-documentation.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: PipesDocumentationComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesDocumentationRoutingModule {}

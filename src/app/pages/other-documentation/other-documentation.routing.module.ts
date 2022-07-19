import { NgModule } from '@angular/core';
import { OtherDocumentationComponent } from './other-documentation.component';
import { RouterModule } from '@angular/router';
import { FormDirtyGuard } from './guards/form-dirty/form-dirty.guard';

const routes = [
  {
    path: '',
    component: OtherDocumentationComponent,
    canDeactivate: [FormDirtyGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class OtherDocumentationRoutingModule {}

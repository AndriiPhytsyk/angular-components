import { NgModule } from '@angular/core';
import { ServicesDocumentationComponent } from './services-documentation.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: ServicesDocumentationComponent
  },
  { path: ':id', component: ServicesDocumentationComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesDocumentationRoutingModule {}

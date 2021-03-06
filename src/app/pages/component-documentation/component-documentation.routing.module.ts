import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentDocumentationComponent } from './component-documentation.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: ComponentDocumentationComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentDocumentationRoutingModule {}

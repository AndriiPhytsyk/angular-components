import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsDocumentationComponent } from './rxjs-documentation.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: RxjsDocumentationComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsDocumentationRoutingModule {}

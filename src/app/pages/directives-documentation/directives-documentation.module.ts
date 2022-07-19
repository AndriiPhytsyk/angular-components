import { NgModule } from '@angular/core';
import { DirectivesDocumentationRoutingModule } from './directives-documentation.routing.module';

@NgModule({
  declarations: [],
  imports: [DirectivesDocumentationRoutingModule],
  providers: [
    { provide: 'Navigator', useValue: navigator },
    { provide: 'Document', useValue: document },
    { provide: 'Window', useValue: window }
  ]
})
export class DirectivesDocumentationModule {}

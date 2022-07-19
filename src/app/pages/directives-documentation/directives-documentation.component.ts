import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-documentation',
  templateUrl: './directives-documentation.component.html',
  styleUrls: ['./directives-documentation.component.scss']
})
export class DirectivesDocumentationComponent {
  log() {
    console.log('log');
  }
}

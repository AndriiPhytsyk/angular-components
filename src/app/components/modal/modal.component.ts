import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title = '';

  @Input() isHidden = true;

  @Input() imgUrl = '';

  close() {
    this.isHidden = true;
  }

  open() {
    this.isHidden = false;
  }
}

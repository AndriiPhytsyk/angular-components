import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  @Input() min: number = 0;
  @Input() max: number = 10;

  public value: number = 0;

  increment() {
    if (this.value < this.max) {
      this.value += 1;
    }
  }

  decrement() {
    if (this.value > this.min) {
      this.value -= 1;
    }
  }
}

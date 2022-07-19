import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent {
  public isShown = false;

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window: scroll') onScroll() {
    const yPosition = this.viewportScroller.getScrollPosition()[1];
    this.isShown = yPosition > 400;
  }

  goToTop() {
    // eslint-disable-next-line no-magic-numbers
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}

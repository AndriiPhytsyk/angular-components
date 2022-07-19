import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appRipple]'
})
export class RippleDirective {
  // TODO make buttons effects configurable
  @Input() appRipple = 'ripple';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onHover() {
    this.renderer.addClass(this.elementRef.nativeElement, this.appRipple);
  }
}
